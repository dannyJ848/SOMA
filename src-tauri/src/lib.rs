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

fn get_data_dir() -> PathBuf {
    let current_dir = std::env::current_dir().unwrap_or_default();
    current_dir.join("data")
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

    let output = Command::new("npx")
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

    let output = Command::new("npx")
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

    let output = Command::new("npx")
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

    let mut cmd = Command::new("npx");
    cmd.arg("tsx")
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
            get_timeline
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
