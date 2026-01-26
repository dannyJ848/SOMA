#!/usr/bin/env node

/**
 * Version Sync Script
 * Synchronizes version numbers across package.json, Cargo.toml, and tauri.conf.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

function getPackageVersion() {
  const packagePath = join(rootDir, 'package.json');
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
  return pkg.version;
}

function updateCargoToml(version) {
  const cargoPath = join(rootDir, 'src-tauri', 'Cargo.toml');
  let cargo = readFileSync(cargoPath, 'utf8');

  // Update version in [package] section
  cargo = cargo.replace(
    /^version = "[\d.]+"$/m,
    `version = "${version}"`
  );

  writeFileSync(cargoPath, cargo);
  console.log(`  Updated: src-tauri/Cargo.toml`);
}

function updateTauriConf(version) {
  const tauriPath = join(rootDir, 'src-tauri', 'tauri.conf.json');
  const tauri = JSON.parse(readFileSync(tauriPath, 'utf8'));

  tauri.version = version;

  writeFileSync(tauriPath, JSON.stringify(tauri, null, 2) + '\n');
  console.log(`  Updated: src-tauri/tauri.conf.json`);
}

function updateEnvFiles(version) {
  const envFiles = ['.env.development', '.env.production', '.env.test', '.env.example'];

  for (const file of envFiles) {
    const envPath = join(rootDir, file);
    try {
      let content = readFileSync(envPath, 'utf8');
      content = content.replace(
        /^VITE_APP_VERSION=.+$/m,
        `VITE_APP_VERSION=${version}`
      );
      writeFileSync(envPath, content);
      console.log(`  Updated: ${file}`);
    } catch (e) {
      // File doesn't exist, skip
    }
  }
}

function main() {
  const version = getPackageVersion();

  console.log(`\nSyncing version: ${version}\n`);

  try {
    updateCargoToml(version);
    updateTauriConf(version);
    updateEnvFiles(version);

    console.log(`\nVersion sync complete!`);
  } catch (error) {
    console.error('Error syncing version:', error.message);
    process.exit(1);
  }
}

main();
