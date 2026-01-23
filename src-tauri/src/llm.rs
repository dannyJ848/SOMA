//! On-device LLM inference using llama.cpp
//!
//! This module provides native LLM inference for iOS/macOS without requiring
//! an external Ollama server. Models are loaded from the app bundle and run
//! directly on the device using Metal acceleration.

use llama_cpp_2::context::params::LlamaContextParams;
use llama_cpp_2::llama_backend::LlamaBackend;
use llama_cpp_2::llama_batch::LlamaBatch;
use llama_cpp_2::model::params::LlamaModelParams;
use llama_cpp_2::model::LlamaModel;
use llama_cpp_2::token::data_array::LlamaTokenDataArray;
use once_cell::sync::OnceCell;
use parking_lot::Mutex;
use rand::Rng;
use serde::{Deserialize, Serialize};
use std::num::NonZeroU32;
use std::path::PathBuf;
use std::sync::Arc;

// Global model instance (loaded once, reused)
static LLM_INSTANCE: OnceCell<Arc<Mutex<LlmInstance>>> = OnceCell::new();

/// LLM instance holding the loaded model and context
struct LlmInstance {
    #[allow(dead_code)]
    backend: LlamaBackend,
    model: LlamaModel,
    model_name: String,
}

/// Status of the on-device LLM
#[derive(Debug, Serialize, Deserialize)]
pub struct LlmStatus {
    pub available: bool,
    pub model: Option<String>,
    pub error: Option<String>,
    #[serde(rename = "isOnDevice")]
    pub is_on_device: bool,
}

/// Chat message format
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LlmChatMessage {
    pub role: String,
    pub content: String,
}

/// Chat request
#[derive(Debug, Serialize, Deserialize)]
pub struct LlmChatRequest {
    pub messages: Vec<LlmChatMessage>,
    #[serde(rename = "systemPrompt")]
    pub system_prompt: Option<String>,
    pub temperature: Option<f32>,
    #[serde(rename = "maxTokens")]
    pub max_tokens: Option<u32>,
}

/// Chat response
#[derive(Debug, Serialize, Deserialize)]
pub struct LlmChatResponse {
    pub content: String,
    pub model: String,
    pub done: bool,
    #[serde(rename = "tokensGenerated")]
    pub tokens_generated: u32,
}

/// Get the model path from the app bundle or resources
fn get_model_path() -> Option<PathBuf> {
    // Try different locations for the model file
    // Note: bartowski HuggingFace uses "Qwen2.5-7B-Instruct-Q4_K_M.gguf" naming
    let possible_paths: Vec<PathBuf> = vec![
        // macOS Application Support (primary location for downloaded models)
        dirs::data_dir()
            .map(|p| p.join("biological-self/models/Qwen2.5-7B-Instruct-Q4_K_M.gguf"))
            .unwrap_or_default(),
        // iOS app bundle
        PathBuf::from("models/Qwen2.5-7B-Instruct-Q4_K_M.gguf"),
        // Alternative lowercase naming
        dirs::data_dir()
            .map(|p| p.join("biological-self/models/qwen2.5-7b-instruct-q4_k_m.gguf"))
            .unwrap_or_default(),
        PathBuf::from("models/qwen2.5-7b-instruct-q4_k_m.gguf"),
        // Development path
        PathBuf::from("../models/Qwen2.5-7B-Instruct-Q4_K_M.gguf"),
        PathBuf::from("../models/qwen2.5-7b-instruct-q4_k_m.gguf"),
        // Fallback to smaller Qwen3 model
        dirs::data_dir()
            .map(|p| p.join("biological-self/models/qwen3-4b-instruct-q4_k_m.gguf"))
            .unwrap_or_default(),
        PathBuf::from("models/qwen3-4b-instruct-q4_k_m.gguf"),
    ];

    for path in possible_paths {
        if !path.as_os_str().is_empty() && path.exists() {
            log::info!("Found model at: {:?}", path);
            return Some(path);
        }
        log::debug!("Checked path (not found): {:?}", path);
    }

    log::warn!("No model file found in any expected location");
    None
}

/// Initialize the LLM backend and load the model
fn init_llm() -> Result<Arc<Mutex<LlmInstance>>, String> {
    log::info!("Initializing on-device LLM...");

    // Initialize the backend
    let backend = LlamaBackend::init()
        .map_err(|e| format!("Failed to initialize llama backend: {}", e))?;

    // Find the model file
    let model_path = get_model_path()
        .ok_or_else(|| "No model file found. Please download a GGUF model.".to_string())?;

    let model_name = model_path
        .file_stem()
        .and_then(|s| s.to_str())
        .unwrap_or("unknown")
        .to_string();

    log::info!("Loading model: {}", model_name);

    // Configure model parameters with Metal acceleration
    let model_params = LlamaModelParams::default()
        .with_n_gpu_layers(99); // Use GPU for all layers on Metal

    // Load the model
    let model = LlamaModel::load_from_file(&backend, &model_path, &model_params)
        .map_err(|e| format!("Failed to load model: {}", e))?;

    log::info!("Model loaded successfully: {}", model_name);

    Ok(Arc::new(Mutex::new(LlmInstance {
        backend,
        model,
        model_name,
    })))
}

/// Get or initialize the LLM instance
fn get_llm() -> Result<Arc<Mutex<LlmInstance>>, String> {
    LLM_INSTANCE
        .get_or_try_init(|| init_llm())
        .map(|arc| arc.clone())
}

/// Format messages into a prompt string for the model (ChatML format)
fn format_prompt(messages: &[LlmChatMessage], system_prompt: Option<&str>) -> String {
    let mut prompt = String::new();

    // Add system prompt if provided
    if let Some(sys) = system_prompt {
        prompt.push_str(&format!("<|im_start|>system\n{}<|im_end|>\n", sys));
    }

    // Add conversation messages
    for msg in messages {
        let role = match msg.role.as_str() {
            "user" => "user",
            "assistant" => "assistant",
            "system" => "system",
            _ => "user",
        };
        prompt.push_str(&format!(
            "<|im_start|>{}\n{}<|im_end|>\n",
            role, msg.content
        ));
    }

    // Add assistant prefix for generation
    prompt.push_str("<|im_start|>assistant\n");

    prompt
}

/// Check if on-device LLM is available
#[tauri::command]
pub async fn llm_health() -> LlmStatus {
    match get_llm() {
        Ok(instance) => {
            let guard = instance.lock();
            LlmStatus {
                available: true,
                model: Some(guard.model_name.clone()),
                error: None,
                is_on_device: true,
            }
        }
        Err(e) => LlmStatus {
            available: false,
            model: None,
            error: Some(e),
            is_on_device: true,
        },
    }
}

/// Generate a chat completion using the on-device model
#[tauri::command]
pub async fn llm_chat(request: LlmChatRequest) -> Result<LlmChatResponse, String> {
    let instance = get_llm()?;
    let guard = instance.lock();

    let prompt = format_prompt(&request.messages, request.system_prompt.as_deref());
    let max_tokens = request.max_tokens.unwrap_or(512);
    let temperature = request.temperature.unwrap_or(0.7);

    // Create context for this generation
    let ctx_params = LlamaContextParams::default()
        .with_n_ctx(NonZeroU32::new(4096));

    let mut ctx = guard
        .model
        .new_context(&guard.backend, ctx_params)
        .map_err(|e| format!("Failed to create context: {}", e))?;

    // Tokenize the prompt
    let tokens = guard
        .model
        .str_to_token(&prompt, llama_cpp_2::model::AddBos::Always)
        .map_err(|e| format!("Failed to tokenize: {}", e))?;

    // Create batch and add tokens
    let mut batch = LlamaBatch::new(512, 1);
    for (i, token) in tokens.iter().enumerate() {
        let is_last = i == tokens.len() - 1;
        batch
            .add(*token, i as i32, &[0], is_last)
            .map_err(|e| format!("Failed to add token to batch: {}", e))?;
    }

    // Process the prompt
    ctx.decode(&mut batch)
        .map_err(|e| format!("Failed to decode prompt: {}", e))?;

    // Generate tokens
    let mut generated_text = String::new();
    let mut tokens_generated: u32 = 0;
    let mut n_cur = tokens.len();
    let mut rng = rand::thread_rng();

    for _ in 0..max_tokens {
        // Get logits and sample
        let logits = ctx.candidates_ith(batch.n_tokens() - 1);
        let mut candidates = LlamaTokenDataArray::from_iter(logits, false);

        // Sample token (using seed for reproducibility with temperature)
        let seed: u32 = if temperature > 0.0 {
            rng.gen()
        } else {
            0 // Greedy sampling
        };
        let new_token = candidates.sample_token(seed);

        // Check for end of generation
        if guard.model.is_eog_token(new_token) {
            break;
        }

        // Decode token to text
        let token_str = guard
            .model
            .token_to_str(new_token, llama_cpp_2::model::Special::Tokenize)
            .map_err(|e| format!("Failed to decode token: {}", e))?;

        generated_text.push_str(&token_str);
        tokens_generated += 1;

        // Prepare next batch
        batch.clear();
        batch
            .add(new_token, n_cur as i32, &[0], true)
            .map_err(|e| format!("Failed to add token: {}", e))?;

        n_cur += 1;

        // Decode the new token
        ctx.decode(&mut batch)
            .map_err(|e| format!("Failed to decode: {}", e))?;
    }

    // Clean up any trailing special tokens from the response
    let content = generated_text
        .trim()
        .trim_end_matches("<|im_end|>")
        .trim()
        .to_string();

    Ok(LlmChatResponse {
        content,
        model: guard.model_name.clone(),
        done: true,
        tokens_generated,
    })
}

/// Preload the model (call during app startup)
#[tauri::command]
pub async fn llm_preload() -> Result<String, String> {
    let instance = get_llm()?;
    let guard = instance.lock();
    Ok(format!("Model loaded: {}", guard.model_name))
}
