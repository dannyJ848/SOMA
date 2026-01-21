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

fn get_data_dir() -> PathBuf {
    // Get the resource directory (where the app is installed)
    // In development, this is the project root
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

    // Call the TypeScript bridge script
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

    let stdout = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(&stdout)
        .map_err(|e| format!("Failed to parse response: {} - stdout: {}", e, stdout))
}

#[tauri::command]
fn create_database(passphrase: String) -> Result<HealthSummary, String> {
    let db_path = get_db_path();

    // Ensure data directory exists
    if let Some(parent) = db_path.parent() {
        std::fs::create_dir_all(parent)
            .map_err(|e| format!("Failed to create data directory: {}", e))?;
    }

    // Call the TypeScript bridge script to create the database
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
            create_database
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
