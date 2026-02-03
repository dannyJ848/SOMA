#!/usr/bin/env node

/**
 * Icon Generator
 * Generates all required app icons from a source image
 * Requires: sharp (npm install sharp)
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const iconsDir = join(rootDir, 'src-tauri', 'icons');

// Source icon should be at least 1024x1024 PNG
const SOURCE_ICON = join(rootDir, 'assets', 'icon-source.png');

// Icon sizes for different platforms
const ICON_SIZES = {
  // macOS
  'icon.png': 512,
  '32x32.png': 32,
  '128x128.png': 128,
  '128x128@2x.png': 256,

  // Windows
  'Square30x30Logo.png': 30,
  'Square44x44Logo.png': 44,
  'Square71x71Logo.png': 71,
  'Square89x89Logo.png': 89,
  'Square107x107Logo.png': 107,
  'Square142x142Logo.png': 142,
  'Square150x150Logo.png': 150,
  'Square284x284Logo.png': 284,
  'Square310x310Logo.png': 310,
  'StoreLogo.png': 50,
};

// ICO sizes (Windows)
const ICO_SIZES = [16, 24, 32, 48, 64, 128, 256];

// ICNS sizes (macOS)
const ICNS_SIZES = [16, 32, 64, 128, 256, 512, 1024];

async function generatePngIcons(sourceImage) {
  console.log('Generating PNG icons...');

  for (const [filename, size] of Object.entries(ICON_SIZES)) {
    const outputPath = join(iconsDir, filename);

    await sharp(sourceImage)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);

    console.log(`  Created: ${filename} (${size}x${size})`);
  }
}

async function generateIco(sourceImage) {
  console.log('Generating ICO icon...');

  // Generate individual sizes for ICO
  const buffers = await Promise.all(
    ICO_SIZES.map(size =>
      sharp(sourceImage)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toBuffer()
    )
  );

  // ICO file format header
  const iconCount = buffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * iconCount;

  let offset = headerSize + dirSize;
  const dataOffsets = [];

  for (const buf of buffers) {
    dataOffsets.push(offset);
    offset += buf.length;
  }

  // Create ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(iconCount, 4); // Number of images

  // Create directory entries
  const directory = Buffer.alloc(dirSize);
  for (let i = 0; i < iconCount; i++) {
    const size = ICO_SIZES[i];
    const buf = buffers[i];
    const entryOffset = i * dirEntrySize;

    directory.writeUInt8(size === 256 ? 0 : size, entryOffset); // Width
    directory.writeUInt8(size === 256 ? 0 : size, entryOffset + 1); // Height
    directory.writeUInt8(0, entryOffset + 2); // Color palette
    directory.writeUInt8(0, entryOffset + 3); // Reserved
    directory.writeUInt16LE(1, entryOffset + 4); // Color planes
    directory.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    directory.writeUInt32LE(buf.length, entryOffset + 8); // Size of image data
    directory.writeUInt32LE(dataOffsets[i], entryOffset + 12); // Offset to image data
  }

  // Combine all parts
  const ico = Buffer.concat([header, directory, ...buffers]);

  const icoPath = join(iconsDir, 'icon.ico');
  const { writeFileSync } = await import('fs');
  writeFileSync(icoPath, ico);

  console.log(`  Created: icon.ico (${ICO_SIZES.join(', ')} sizes)`);
}

async function generateIcns(sourceImage) {
  console.log('Generating ICNS icon...');

  // Note: Creating a proper ICNS file requires icns-lib or similar
  // For now, we'll create the PNG files that Tauri can use

  const icnsTypes = [
    { size: 16, name: 'icon_16x16.png' },
    { size: 32, name: 'icon_16x16@2x.png' },
    { size: 32, name: 'icon_32x32.png' },
    { size: 64, name: 'icon_32x32@2x.png' },
    { size: 128, name: 'icon_128x128.png' },
    { size: 256, name: 'icon_128x128@2x.png' },
    { size: 256, name: 'icon_256x256.png' },
    { size: 512, name: 'icon_256x256@2x.png' },
    { size: 512, name: 'icon_512x512.png' },
    { size: 1024, name: 'icon_512x512@2x.png' },
  ];

  // Create iconset directory
  const iconsetDir = join(iconsDir, 'icon.iconset');
  if (!existsSync(iconsetDir)) {
    mkdirSync(iconsetDir, { recursive: true });
  }

  for (const { size, name } of icnsTypes) {
    const outputPath = join(iconsetDir, name);

    await sharp(sourceImage)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
  }

  // On macOS, convert iconset to icns using iconutil
  try {
    const { execSync } = await import('child_process');
    execSync(`iconutil -c icns "${iconsetDir}" -o "${join(iconsDir, 'icon.icns')}"`, {
      stdio: 'pipe'
    });
    console.log(`  Created: icon.icns`);
  } catch (e) {
    console.log(`  Note: Run 'iconutil -c icns src-tauri/icons/icon.iconset -o src-tauri/icons/icon.icns' on macOS to create ICNS`);
  }
}

async function generateSplashScreens(sourceImage) {
  console.log('Generating splash screens...');

  const splashDir = join(rootDir, 'src-tauri', 'splash');
  if (!existsSync(splashDir)) {
    mkdirSync(splashDir, { recursive: true });
  }

  const splashSizes = [
    { width: 2732, height: 2732, name: 'splash-2732x2732.png' }, // iPad Pro
    { width: 1668, height: 2388, name: 'splash-1668x2388.png' }, // iPad Pro 11"
    { width: 1536, height: 2048, name: 'splash-1536x2048.png' }, // iPad
    { width: 1242, height: 2688, name: 'splash-1242x2688.png' }, // iPhone Xs Max
    { width: 1125, height: 2436, name: 'splash-1125x2436.png' }, // iPhone X
    { width: 1242, height: 2208, name: 'splash-1242x2208.png' }, // iPhone 8 Plus
    { width: 750, height: 1334, name: 'splash-750x1334.png' },   // iPhone 8
    { width: 640, height: 1136, name: 'splash-640x1136.png' },   // iPhone SE
  ];

  for (const { width, height, name } of splashSizes) {
    const outputPath = join(splashDir, name);

    // Create splash with centered icon on gradient background
    const iconSize = Math.min(width, height) / 4;
    const icon = await sharp(sourceImage)
      .resize(Math.round(iconSize), Math.round(iconSize))
      .toBuffer();

    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 26, g: 26, b: 46, alpha: 1 } // Dark background
      }
    })
      .composite([
        {
          input: icon,
          top: Math.round((height - iconSize) / 2),
          left: Math.round((width - iconSize) / 2),
        }
      ])
      .png()
      .toFile(outputPath);

    console.log(`  Created: ${name}`);
  }
}

async function main() {
  console.log('\n=== Biological Self Icon Generator ===\n');

  // Check if source icon exists
  if (!existsSync(SOURCE_ICON)) {
    console.log(`Source icon not found at: ${SOURCE_ICON}`);
    console.log('Please provide a 1024x1024 PNG icon at assets/icon-source.png');

    // Create a placeholder icon
    console.log('\nCreating placeholder icon...');

    const assetsDir = join(rootDir, 'assets');
    if (!existsSync(assetsDir)) {
      mkdirSync(assetsDir, { recursive: true });
    }

    // Create a simple placeholder with a heart icon
    await sharp({
      create: {
        width: 1024,
        height: 1024,
        channels: 4,
        background: { r: 99, g: 102, b: 241, alpha: 1 } // Indigo
      }
    })
      .png()
      .toFile(SOURCE_ICON);

    console.log('Created placeholder icon. Please replace with your actual icon.');
  }

  // Ensure icons directory exists
  if (!existsSync(iconsDir)) {
    mkdirSync(iconsDir, { recursive: true });
  }

  try {
    await generatePngIcons(SOURCE_ICON);
    await generateIco(SOURCE_ICON);
    await generateIcns(SOURCE_ICON);
    await generateSplashScreens(SOURCE_ICON);

    console.log('\nIcon generation complete!');
  } catch (error) {
    console.error('Error generating icons:', error.message);
    process.exit(1);
  }
}

main();
