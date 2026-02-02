use serde::{Deserialize, Serialize};
use std::io::Write;
use std::process::{Command, Stdio};
use std::path::PathBuf;
use zeroize::Zeroize;

// On-device LLM module for iOS/native inference
mod llm;
pub use llm::{llm_health, llm_chat, llm_preload};

#[derive(Debug, Serialize, Deserialize)]
pub struct HealthSummary {
    #[serde(rename = "totalConditions")]
    pub total_conditions: u32,
    #[serde(rename = "totalMedications")]
    pub total_medications: u32,
    #[serde(rename = "totalLabResults")]
    pub total_lab_results: u32,
    #[serde(rename = "totalWhoopCycles")]
    pub total_whoop_cycles: u32,
    #[serde(rename = "totalAppleHealthDays")]
    pub total_apple_health_days: u32,
    #[serde(rename = "lastUpdated")]
    pub last_updated: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ConditionSummary {
    pub id: String,
    pub name: String,
    pub status: String,
    pub severity: Option<String>,
    #[serde(rename = "diagnosedDate")]
    pub diagnosed_date: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MedicationSummary {
    pub id: String,
    pub name: String,
    pub dosage: Option<String>,
    pub frequency: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LabWithTrend {
    pub id: String,
    #[serde(rename = "testName")]
    pub test_name: String,
    pub value: serde_json::Value, // Can be number or string
    pub unit: Option<String>,
    pub status: Option<String>,
    #[serde(rename = "collectedAt")]
    pub collected_at: String,
    pub trend: Option<String>,
    #[serde(rename = "previousValue")]
    pub previous_value: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VitalsSummary {
    #[serde(rename = "restingHeartRate")]
    pub resting_heart_rate: Option<f64>,
    pub hrv: Option<f64>,
    #[serde(rename = "sleepHours")]
    pub sleep_hours: Option<f64>,
    #[serde(rename = "recoveryScore")]
    pub recovery_score: Option<f64>,
    pub steps: Option<u32>,
    #[serde(rename = "lastUpdated")]
    pub last_updated: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SymptomSummary {
    pub id: String,
    pub description: String,
    pub severity: u32,
    pub location: Option<String>,
    #[serde(rename = "onsetDate")]
    pub onset_date: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DashboardData {
    pub summary: HealthSummary,
    #[serde(rename = "activeConditions")]
    pub active_conditions: Vec<ConditionSummary>,
    #[serde(rename = "currentMedications")]
    pub current_medications: Vec<MedicationSummary>,
    #[serde(rename = "recentLabs")]
    pub recent_labs: Vec<LabWithTrend>,
    #[serde(rename = "vitalsSummary")]
    pub vitals_summary: VitalsSummary,
    #[serde(rename = "recentSymptoms")]
    pub recent_symptoms: Vec<SymptomSummary>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TimelineEvent {
    pub id: String,
    #[serde(rename = "type")]
    pub event_type: String,
    pub date: String,
    pub title: String,
    pub subtitle: Option<String>,
    pub details: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TimelineFilters {
    pub types: Vec<String>,
    #[serde(rename = "startDate")]
    pub start_date: Option<String>,
    #[serde(rename = "endDate")]
    pub end_date: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TimelineData {
    pub events: Vec<TimelineEvent>,
    pub filters: TimelineFilters,
    #[serde(rename = "totalCount")]
    pub total_count: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SymptomDuration {
    pub value: u32,
    pub unit: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SymptomInput {
    pub description: String,
    pub severity: u32,
    #[serde(rename = "bodyLocation")]
    pub body_location: String,
    #[serde(rename = "onsetDate")]
    pub onset_date: String,
    pub duration: Option<SymptomDuration>,
    pub status: String,
    #[serde(rename = "associatedFactors")]
    pub associated_factors: Option<Vec<String>>,
    pub frequency: Option<String>,
    #[serde(rename = "timeOfDay")]
    pub time_of_day: Option<String>,
    pub notes: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AddSymptomResult {
    pub success: bool,
    pub symptom: serde_json::Value,
}

// AI Types
#[derive(Debug, Serialize, Deserialize)]
pub struct AIHealthResponse {
    pub available: bool,
    pub version: Option<String>,
    pub error: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OllamaModelDetails {
    pub format: Option<String>,
    pub family: Option<String>,
    pub parameter_size: Option<String>,
    pub quantization_level: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OllamaModel {
    pub name: String,
    pub modified_at: String,
    pub size: u64,
    pub digest: String,
    pub details: Option<OllamaModelDetails>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIModelsResponse {
    pub models: Vec<OllamaModel>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ChatMessage {
    pub role: String,
    pub content: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIChatRequest {
    pub model: Option<String>,
    pub messages: Vec<ChatMessage>,
    #[serde(rename = "systemPrompt")]
    pub system_prompt: Option<String>,
    pub format: Option<String>,
    pub temperature: Option<f64>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIChatResponse {
    pub content: String,
    pub model: String,
    pub done: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RAGOptions {
    #[serde(rename = "structureName")]
    pub structure_name: Option<String>,
    pub symptom: Option<String>,
    #[serde(rename = "labName")]
    pub lab_name: Option<String>,
    #[serde(rename = "labValue")]
    pub lab_value: Option<String>,
    pub system: Option<String>,
    #[serde(rename = "complexityLevel")]
    pub complexity_level: Option<u8>,
    #[serde(rename = "maxTokens")]
    pub max_tokens: Option<u32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIChatRAGRequest {
    pub model: Option<String>,
    pub messages: Vec<ChatMessage>,
    #[serde(rename = "systemPrompt")]
    pub system_prompt: Option<String>,
    pub temperature: Option<f64>,
    #[serde(rename = "ragOptions")]
    pub rag_options: Option<RAGOptions>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Citation {
    pub index: u32,
    pub source: String,
    pub section: Option<String>,
    pub url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RAGContext {
    #[serde(rename = "chunksUsed")]
    pub chunks_used: u32,
    #[serde(rename = "totalTokens")]
    pub total_tokens: u32,
    #[serde(rename = "processingTimeMs")]
    pub processing_time_ms: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AIChatRAGResponse {
    pub content: String,
    pub model: String,
    pub done: bool,
    pub citations: Vec<Citation>,
    #[serde(rename = "ragContext")]
    pub rag_context: Option<RAGContext>,
}

// ============================================================================
// Demographics Types
// ============================================================================

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UserDemographics {
    #[serde(rename = "heightCm")]
    pub height_cm: i32,
    #[serde(rename = "weightKg")]
    pub weight_kg: i32,
    pub age: i32,
    pub sex: String,
    #[serde(rename = "bodyType")]
    pub body_type: String,
    pub ethnicity: Option<String>,
    pub bmi: Option<f64>,
    #[serde(rename = "bodyFatEstimate")]
    pub body_fat_estimate: Option<f64>,
}

// Store demographics in memory for the session
static DEMOGRAPHICS: std::sync::OnceLock<std::sync::Mutex<Option<UserDemographics>>> = std::sync::OnceLock::new();

fn get_demographics_store() -> Option<UserDemographics> {
    DEMOGRAPHICS.get_or_init(|| std::sync::Mutex::new(None))
        .lock()
        .ok()
        .and_then(|guard| guard.clone())
}

fn set_demographics_store(demographics: UserDemographics) {
    if let Some(mutex) = DEMOGRAPHICS.get() {
        if let Ok(mut guard) = mutex.lock() {
            *guard = Some(demographics);
        }
    } else {
        let _ = DEMOGRAPHICS.set(std::sync::Mutex::new(Some(demographics)));
    }
}

fn clear_demographics_store() {
    if let Some(mutex) = DEMOGRAPHICS.get() {
        if let Ok(mut guard) = mutex.lock() {
            *guard = None;
        }
    }
}

// Store passphrase in memory for the session
static PASSPHRASE: std::sync::OnceLock<std::sync::Mutex<Option<String>>> = std::sync::OnceLock::new();

fn get_passphrase() -> Option<String> {
    PASSPHRASE.get_or_init(|| std::sync::Mutex::new(None))
        .lock()
        .ok()
        .and_then(|guard| guard.clone())
}

fn set_passphrase(passphrase: String) {
    if let Some(mutex) = PASSPHRASE.get() {
        if let Ok(mut guard) = mutex.lock() {
            *guard = Some(passphrase);
        }
    } else {
        let _ = PASSPHRASE.set(std::sync::Mutex::new(Some(passphrase)));
    }
}

/// Securely clear the passphrase from memory by zeroing the bytes before dropping.
fn clear_passphrase() {
    if let Some(mutex) = PASSPHRASE.get() {
        if let Ok(mut guard) = mutex.lock() {
            if let Some(ref mut s) = *guard {
                // SAFETY: Zeroize the underlying String bytes before dropping
                s.zeroize();
            }
            *guard = None;
        }
    }
}

#[tauri::command]
fn lock_database() -> Result<(), String> {
    clear_passphrase();
    clear_demographics_store();
    Ok(())
}

fn get_project_root() -> PathBuf {
    // When running via Tauri, we might be in src-tauri, so go up one level
    let current_dir = std::env::current_dir().unwrap_or_default();
    if current_dir.ends_with("src-tauri") {
        current_dir.parent().unwrap_or(&current_dir).to_path_buf()
    } else if current_dir.join("tauri-bridge.ts").exists() {
        current_dir
    } else if current_dir.parent().map(|p| p.join("tauri-bridge.ts").exists()).unwrap_or(false) {
        current_dir.parent().unwrap().to_path_buf()
    } else {
        current_dir
    }
}

fn get_data_dir() -> PathBuf {
    // On iOS, use the Documents directory which is the only writable location
    #[cfg(target_os = "ios")]
    {
        // Use home directory + Documents - more reliable than dirs crate on iOS
        let home_dir = std::env::var("HOME")
            .map(PathBuf::from)
            .unwrap_or_else(|_| std::env::current_dir().unwrap_or_default());
        
        // iOS app home is like: /var/mobile/Containers/Data/Application/<UUID>/
        // Documents is directly under home
        home_dir.join("Documents").join("biological-self-data")
    }
    
    // On desktop platforms, use project root
    #[cfg(not(target_os = "ios"))]
    {
        get_project_root().join("data")
    }
}

fn get_db_path() -> PathBuf {
    get_data_dir().join("biological-self.db")
}

/// Spawn a bridge child process with the passphrase delivered via stdin pipe
/// instead of an environment variable. This prevents exposure via `ps eww`
/// or `/proc/[pid]/environ`. (Remediation for FINDING-05)
fn spawn_bridge_with_passphrase(
    project_root: &std::path::Path,
    bridge_script: &str,
    args: &[&str],
    passphrase: &str,
    db_path: &str,
) -> Result<std::process::Output, String> {
    let mut cmd = Command::new("npx");
    cmd.current_dir(project_root)
        .arg("tsx")
        .arg(bridge_script);

    for arg in args {
        cmd.arg(arg);
    }

    cmd.env("BIOSELF_DB_PATH", db_path)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped());

    let mut child = cmd
        .spawn()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

    // Write passphrase to stdin and close it so the child reads exactly one line
    if let Some(mut stdin) = child.stdin.take() {
        stdin
            .write_all(passphrase.as_bytes())
            .map_err(|e| format!("Failed to write passphrase to stdin: {}", e))?;
        stdin
            .write_all(b"\n")
            .map_err(|e| format!("Failed to write newline to stdin: {}", e))?;
        // stdin is dropped here, closing the pipe
    }

    child
        .wait_with_output()
        .map_err(|e| format!("Failed to wait for bridge process: {}", e))
}

#[tauri::command]
fn check_database_exists() -> bool {
    get_db_path().exists()
}

#[tauri::command]
fn unlock_database(passphrase: String) -> Result<HealthSummary, String> {
    let db_path = get_db_path();

    if !db_path.exists() {
        return Err("Database does not exist. Please create one first.".to_string());
    }

    let project_root = get_project_root();
    let output = spawn_bridge_with_passphrase(
        &project_root,
        "tauri-bridge.ts",
        &["get-summary"],
        &passphrase,
        db_path.to_str().unwrap(),
    )?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        if stderr.contains("Unsupported state") || stderr.contains("bad decrypt") {
            return Err("Incorrect passphrase".to_string());
        }
        return Err(format!("Database error: {}", stderr));
    }

    // Store passphrase for subsequent calls
    set_passphrase(passphrase);

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

#[tauri::command]
fn create_database(passphrase: String) -> Result<HealthSummary, String> {
    let db_path = get_db_path();

    if let Some(parent) = db_path.parent() {
        std::fs::create_dir_all(parent)
            .map_err(|e| format!("Failed to create data directory: {}", e))?;
    }

    let project_root = get_project_root();
    let output = spawn_bridge_with_passphrase(
        &project_root,
        "tauri-bridge.ts",
        &["create"],
        &passphrase,
        db_path.to_str().unwrap(),
    )?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(format!("Failed to create database: {}", stderr));
    }

    // Store passphrase for subsequent calls
    set_passphrase(passphrase);

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

#[tauri::command]
fn get_dashboard() -> Result<DashboardData, String> {
    let db_path = get_db_path();

    let passphrase = get_passphrase()
        .ok_or_else(|| "Not authenticated. Please unlock the database first.".to_string())?;

    let project_root = get_project_root();
    let output = spawn_bridge_with_passphrase(
        &project_root,
        "tauri-bridge.ts",
        &["get-dashboard"],
        &passphrase,
        db_path.to_str().unwrap(),
    )?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(format!("Failed to get dashboard: {}", stderr));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

#[tauri::command]
fn get_timeline(
    types: Option<Vec<String>>,
    start_date: Option<String>,
    end_date: Option<String>,
) -> Result<TimelineData, String> {
    let db_path = get_db_path();

    let passphrase = get_passphrase()
        .ok_or_else(|| "Not authenticated. Please unlock the database first.".to_string())?;

    let project_root = get_project_root();

    // Build optional filter arguments
    let types_str = types.as_ref().map(|t| t.join(",")).unwrap_or_default();
    let start_str = start_date.as_deref().unwrap_or("").to_string();
    let end_str = end_date.as_deref().unwrap_or("").to_string();

    let mut args: Vec<&str> = vec!["get-timeline", &types_str, &start_str];
    if end_date.is_some() {
        args.push(&end_str);
    }

    let output = spawn_bridge_with_passphrase(
        &project_root,
        "tauri-bridge.ts",
        &args,
        &passphrase,
        db_path.to_str().unwrap(),
    )?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(format!("Failed to get timeline: {}", stderr));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

#[tauri::command]
fn add_symptom(symptom: SymptomInput) -> Result<AddSymptomResult, String> {
    let db_path = get_db_path();

    let passphrase = get_passphrase()
        .ok_or_else(|| "Not authenticated. Please unlock the database first.".to_string())?;

    // Serialize the symptom input to JSON string
    let symptom_json = serde_json::to_string(&symptom)
        .map_err(|e| format!("Failed to serialize symptom: {}", e))?;

    let project_root = get_project_root();
    let output = spawn_bridge_with_passphrase(
        &project_root,
        "tauri-bridge.ts",
        &["add-symptom", &symptom_json],
        &passphrase,
        db_path.to_str().unwrap(),
    )?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(format!("Failed to add symptom: {}", stderr));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

// ============================================================================
// Demographics Commands
// ============================================================================

#[tauri::command]
fn get_demographics() -> Option<UserDemographics> {
    get_demographics_store()
}

#[tauri::command]
fn save_demographics(demographics: UserDemographics) -> Result<(), String> {
    set_demographics_store(demographics);
    Ok(())
}

#[tauri::command]
fn clear_demographics() -> Result<(), String> {
    clear_demographics_store();
    Ok(())
}

// ============================================================================
// AI Commands
// ============================================================================

#[tauri::command]
async fn ai_health() -> Result<AIHealthResponse, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-bridge.ts")
            .arg("health")
            .output()
            .map_err(|e| format!("Failed to execute AI bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("AI health check failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse AI response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn ai_models() -> Result<AIModelsResponse, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-bridge.ts")
            .arg("models")
            .output()
            .map_err(|e| format!("Failed to execute AI bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to list AI models: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse AI response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn ai_chat(request: AIChatRequest) -> Result<AIChatResponse, String> {
    // Serialize the request to JSON before spawning
    let request_json = serde_json::to_string(&request)
        .map_err(|e| format!("Failed to serialize chat request: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-bridge.ts")
            .arg("chat")
            .arg(&request_json)
            .output()
            .map_err(|e| format!("Failed to execute AI bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("AI chat failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse AI response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn ai_chat_json(request: AIChatRequest) -> Result<serde_json::Value, String> {
    // Serialize the request to JSON before spawning
    let request_json = serde_json::to_string(&request)
        .map_err(|e| format!("Failed to serialize chat request: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-bridge.ts")
            .arg("chat-json")
            .arg(&request_json)
            .output()
            .map_err(|e| format!("Failed to execute AI bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("AI chat JSON failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse AI response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

// ============================================================================
// Journey Store Types
// ============================================================================

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyActionInput {
    pub id: String,
    #[serde(rename = "sessionId")]
    pub session_id: String,
    pub timestamp: String,
    #[serde(rename = "featureArea")]
    pub feature_area: String,
    #[serde(rename = "actionType")]
    pub action_type: String,
    pub payload: serde_json::Value,
    #[serde(rename = "durationMs")]
    pub duration_ms: Option<u64>,
    #[serde(rename = "previousActionId")]
    pub previous_action_id: Option<String>,
    #[serde(rename = "sourceComponent")]
    pub source_component: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyAddActionResult {
    pub success: bool,
    #[serde(rename = "actionId")]
    pub action_id: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyActionsResult {
    pub actions: Vec<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyCountResult {
    pub count: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyStartResult {
    #[serde(rename = "journeyId")]
    pub journey_id: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyResult {
    pub journey: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneysResult {
    pub journeys: Vec<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct JourneyStatsResult {
    #[serde(rename = "totalActions")]
    pub total_actions: u32,
    #[serde(rename = "totalJourneys")]
    pub total_journeys: u32,
    #[serde(rename = "oldestAction")]
    pub oldest_action: Option<String>,
    #[serde(rename = "newestAction")]
    pub newest_action: Option<String>,
}

// ============================================================================
// Intent Prediction Types
// ============================================================================

#[derive(Debug, Serialize, Deserialize)]
pub struct PredictionHealthProfile {
    pub conditions: Vec<serde_json::Value>,
    pub medications: Vec<serde_json::Value>,
    #[serde(rename = "recentSymptoms")]
    pub recent_symptoms: Vec<serde_json::Value>,
    #[serde(rename = "abnormalLabs")]
    pub abnormal_labs: Vec<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PredictionCurrentContext {
    pub view: String,
    #[serde(rename = "selectedEntity")]
    pub selected_entity: Option<serde_json::Value>,
    #[serde(rename = "visiblePanels")]
    pub visible_panels: Vec<String>,
    #[serde(rename = "activeComplexityLevel")]
    pub active_complexity_level: Option<u8>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PredictionRequest {
    #[serde(rename = "recentActions")]
    pub recent_actions: Vec<serde_json::Value>,
    #[serde(rename = "healthProfile")]
    pub health_profile: PredictionHealthProfile,
    #[serde(rename = "currentContext")]
    pub current_context: PredictionCurrentContext,
    #[serde(rename = "maxPredictions")]
    pub max_predictions: Option<u32>,
    #[serde(rename = "maxShortcuts")]
    pub max_shortcuts: Option<u32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PredictionResponse {
    pub intent: serde_json::Value,
    pub model: String,
    #[serde(rename = "processingTimeMs")]
    pub processing_time_ms: u64,
    #[serde(rename = "tokensUsed")]
    pub tokens_used: u32,
    #[serde(rename = "usedFallback")]
    pub used_fallback: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PredictionHealthResponse {
    pub available: bool,
    pub model: Option<String>,
    pub error: Option<String>,
}

// ============================================================================
// Journey Store Commands
// ============================================================================

#[tauri::command]
async fn journey_add_action(action: JourneyActionInput) -> Result<JourneyAddActionResult, String> {
    let action_json = serde_json::to_string(&action)
        .map_err(|e| format!("Failed to serialize action: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("add-action")
            .arg(&action_json)
            .output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to add action: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn journey_get_recent_actions(session_id: String, limit: Option<u32>) -> Result<JourneyActionsResult, String> {
    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let mut cmd = Command::new("npx");
        cmd.current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("get-recent-actions")
            .arg(&session_id);

        if let Some(l) = limit {
            cmd.arg(l.to_string());
        }

        let output = cmd.output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to get recent actions: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn journey_get_action_count(session_id: String) -> Result<JourneyCountResult, String> {
    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("get-action-count")
            .arg(&session_id)
            .output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to get action count: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn journey_start(
    session_id: String,
    journey_type: String,
    health_context: serde_json::Value,
) -> Result<JourneyStartResult, String> {
    let health_context_json = serde_json::to_string(&health_context)
        .map_err(|e| format!("Failed to serialize health context: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("start-journey")
            .arg(&session_id)
            .arg(&journey_type)
            .arg(&health_context_json)
            .output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to start journey: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn journey_get(journey_id: String) -> Result<JourneyResult, String> {
    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("get-journey")
            .arg(&journey_id)
            .output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to get journey: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn journey_get_stats() -> Result<JourneyStatsResult, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("journey-bridge.ts")
            .arg("get-stats")
            .output()
            .map_err(|e| format!("Failed to execute journey bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Failed to get stats: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn ai_chat_rag(request: AIChatRAGRequest) -> Result<AIChatRAGResponse, String> {
    // Serialize the request to JSON before spawning
    let request_json = serde_json::to_string(&request)
        .map_err(|e| format!("Failed to serialize RAG chat request: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-bridge.ts")
            .arg("chat-rag")
            .arg(&request_json)
            .output()
            .map_err(|e| format!("Failed to execute AI bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("AI RAG chat failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse AI RAG response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

// ============================================================================
// Intent Prediction Commands
// ============================================================================

#[tauri::command]
async fn predict_intent(request: PredictionRequest) -> Result<PredictionResponse, String> {
    // Serialize the request to JSON before spawning
    let request_json = serde_json::to_string(&request)
        .map_err(|e| format!("Failed to serialize prediction request: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-predict-bridge.ts")
            .arg("predict")
            .arg(&request_json)
            .output()
            .map_err(|e| format!("Failed to execute prediction bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Intent prediction failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse prediction response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn prediction_health() -> Result<PredictionHealthResponse, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("ai-predict-bridge.ts")
            .arg("health")
            .output()
            .map_err(|e| format!("Failed to execute prediction bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Prediction health check failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse health response: {} - stdout: {}", e, stdout))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

// ============================================================================
// Voice Types
// ============================================================================

#[derive(Debug, Serialize, Deserialize)]
pub struct VoiceHealthResponse {
    pub available: bool,
    #[serde(rename = "pythonAvailable")]
    pub python_available: bool,
    #[serde(rename = "pythonVersion")]
    pub python_version: Option<String>,
    #[serde(rename = "sttModelLoaded")]
    pub stt_model_loaded: bool,
    #[serde(rename = "ttsModelLoaded")]
    pub tts_model_loaded: bool,
    pub device: Option<serde_json::Value>,
    pub error: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VoiceTranscriptionResult {
    pub text: String,
    pub confidence: f64,
    pub language: String,
    #[serde(rename = "durationMs")]
    pub duration_ms: u64,
    #[serde(rename = "processingTimeMs")]
    pub processing_time_ms: u64,
    #[serde(rename = "wordTimestamps")]
    pub word_timestamps: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VoiceSynthesisRequest {
    pub text: String,
    pub voice: Option<String>,
    pub language: Option<String>,
    #[serde(rename = "speakingRate")]
    pub speaking_rate: Option<f64>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VoiceSynthesisResult {
    #[serde(rename = "audioBase64")]
    pub audio_base64: String,
    pub format: String,
    #[serde(rename = "sampleRate")]
    pub sample_rate: u32,
    #[serde(rename = "durationMs")]
    pub duration_ms: u64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VoiceModelsResponse {
    #[serde(rename = "sttModels")]
    pub stt_models: Vec<serde_json::Value>,
    #[serde(rename = "ttsModels")]
    pub tts_models: Vec<serde_json::Value>,
    pub voices: Vec<serde_json::Value>,
}

// ============================================================================
// Voice Commands
// ============================================================================

#[tauri::command]
async fn voice_health() -> Result<VoiceHealthResponse, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("voice-bridge.ts")
            .arg("health")
            .output()
            .map_err(|e| format!("Failed to execute voice bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Voice health check failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let response: serde_json::Value = serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse voice response: {} - stdout: {}", e, stdout))?;

        if response.get("success").and_then(|v| v.as_bool()) == Some(true) {
            if let Some(data) = response.get("data") {
                return serde_json::from_value(data.clone())
                    .map_err(|e| format!("Failed to parse voice health data: {}", e));
            }
        }

        // Return error response
        Ok(VoiceHealthResponse {
            available: false,
            python_available: false,
            python_version: None,
            stt_model_loaded: false,
            tts_model_loaded: false,
            device: None,
            error: response.get("error")
                .and_then(|e| e.get("message"))
                .and_then(|m| m.as_str())
                .map(|s| s.to_string()),
        })
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn voice_models() -> Result<VoiceModelsResponse, String> {
    tauri::async_runtime::spawn_blocking(|| {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("voice-bridge.ts")
            .arg("models")
            .output()
            .map_err(|e| format!("Failed to execute voice bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Voice models query failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let response: serde_json::Value = serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse voice response: {} - stdout: {}", e, stdout))?;

        if response.get("success").and_then(|v| v.as_bool()) == Some(true) {
            if let Some(data) = response.get("data") {
                return serde_json::from_value(data.clone())
                    .map_err(|e| format!("Failed to parse voice models data: {}", e));
            }
        }

        Err("Failed to get voice models".to_string())
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn voice_transcribe(audio_base64: String, language: Option<String>) -> Result<VoiceTranscriptionResult, String> {
    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();

        let mut cmd = Command::new("npx");
        cmd.current_dir(&project_root)
            .arg("tsx")
            .arg("voice-bridge.ts")
            .arg("transcribe-base64")
            .arg(&audio_base64);

        if let Some(lang) = language {
            cmd.arg(&lang);
        }

        let output = cmd.output()
            .map_err(|e| format!("Failed to execute voice bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Voice transcription failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let response: serde_json::Value = serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse voice response: {} - stdout: {}", e, stdout))?;

        if response.get("success").and_then(|v| v.as_bool()) == Some(true) {
            if let Some(data) = response.get("data") {
                return serde_json::from_value(data.clone())
                    .map_err(|e| format!("Failed to parse transcription data: {}", e));
            }
        }

        let error_msg = response.get("error")
            .and_then(|e| e.get("message"))
            .and_then(|m| m.as_str())
            .unwrap_or("Unknown error");
        Err(format!("Transcription failed: {}", error_msg))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[tauri::command]
async fn voice_synthesize(request: VoiceSynthesisRequest) -> Result<VoiceSynthesisResult, String> {
    let request_json = serde_json::to_string(&request)
        .map_err(|e| format!("Failed to serialize synthesis request: {}", e))?;

    tauri::async_runtime::spawn_blocking(move || {
        let project_root = get_project_root();
        let output = Command::new("npx")
            .current_dir(&project_root)
            .arg("tsx")
            .arg("voice-bridge.ts")
            .arg("synthesize")
            .arg(&request_json)
            .output()
            .map_err(|e| format!("Failed to execute voice bridge: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("Voice synthesis failed: {}", stderr));
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let response: serde_json::Value = serde_json::from_str(&stdout)
            .map_err(|e| format!("Failed to parse voice response: {} - stdout: {}", e, stdout))?;

        if response.get("success").and_then(|v| v.as_bool()) == Some(true) {
            if let Some(data) = response.get("data") {
                return serde_json::from_value(data.clone())
                    .map_err(|e| format!("Failed to parse synthesis data: {}", e));
            }
        }

        let error_msg = response.get("error")
            .and_then(|e| e.get("message"))
            .and_then(|m| m.as_str())
            .unwrap_or("Unknown error");
        Err(format!("Synthesis failed: {}", error_msg))
    })
    .await
    .map_err(|e| format!("Task join error: {}", e))?
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            check_database_exists,
            unlock_database,
            lock_database,
            create_database,
            get_dashboard,
            get_timeline,
            add_symptom,
            get_demographics,
            save_demographics,
            clear_demographics,
            ai_health,
            ai_models,
            ai_chat,
            ai_chat_json,
            ai_chat_rag,
            journey_add_action,
            journey_get_recent_actions,
            journey_get_action_count,
            journey_start,
            journey_get,
            journey_get_stats,
            predict_intent,
            prediction_health,
            voice_health,
            voice_models,
            voice_transcribe,
            voice_synthesize,
            // On-device LLM commands (for iOS/native)
            llm_health,
            llm_chat,
            llm_preload
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
