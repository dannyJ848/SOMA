use serde::{Deserialize, Serialize};
use std::process::Command;
use std::path::PathBuf;

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
    get_project_root().join("data")
}

fn get_db_path() -> PathBuf {
    get_data_dir().join("biological-self.db")
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
    let output = Command::new("npx")
        .current_dir(&project_root)
        .arg("tsx")
        .arg("tauri-bridge.ts")
        .arg("get-summary")
        .env("BIOSELF_PASSPHRASE", &passphrase)
        .env("BIOSELF_DB_PATH", db_path.to_str().unwrap())
        .output()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

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
    let output = Command::new("npx")
        .current_dir(&project_root)
        .arg("tsx")
        .arg("tauri-bridge.ts")
        .arg("create")
        .env("BIOSELF_PASSPHRASE", &passphrase)
        .env("BIOSELF_DB_PATH", db_path.to_str().unwrap())
        .output()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

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
    let output = Command::new("npx")
        .current_dir(&project_root)
        .arg("tsx")
        .arg("tauri-bridge.ts")
        .arg("get-dashboard")
        .env("BIOSELF_PASSPHRASE", &passphrase)
        .env("BIOSELF_DB_PATH", db_path.to_str().unwrap())
        .output()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

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
    let mut cmd = Command::new("npx");
    cmd.current_dir(&project_root)
        .arg("tsx")
        .arg("tauri-bridge.ts")
        .arg("get-timeline")
        .env("BIOSELF_PASSPHRASE", &passphrase)
        .env("BIOSELF_DB_PATH", db_path.to_str().unwrap());

    // Add optional filter arguments
    if let Some(ref t) = types {
        cmd.arg(t.join(","));
    } else {
        cmd.arg(""); // Empty types arg
    }

    if let Some(ref sd) = start_date {
        cmd.arg(sd);
    } else {
        cmd.arg(""); // Empty start date arg
    }

    if let Some(ref ed) = end_date {
        cmd.arg(ed);
    }

    let output = cmd.output()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

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
    let output = Command::new("npx")
        .current_dir(&project_root)
        .arg("tsx")
        .arg("tauri-bridge.ts")
        .arg("add-symptom")
        .arg(&symptom_json)
        .env("BIOSELF_PASSPHRASE", &passphrase)
        .env("BIOSELF_DB_PATH", db_path.to_str().unwrap())
        .output()
        .map_err(|e| format!("Failed to execute bridge: {}", e))?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        return Err(format!("Failed to add symptom: {}", stderr));
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
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
            create_database,
            get_dashboard,
            get_timeline,
            add_symptom,
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
            prediction_health
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
