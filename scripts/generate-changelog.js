#!/usr/bin/env node

/**
 * Changelog Generator
 * Generates CHANGELOG.md from git commit history
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const COMMIT_TYPES = {
  feat: 'Features',
  fix: 'Bug Fixes',
  perf: 'Performance Improvements',
  refactor: 'Code Refactoring',
  docs: 'Documentation',
  style: 'Styles',
  test: 'Tests',
  build: 'Build System',
  ci: 'CI/CD',
  chore: 'Chores',
  revert: 'Reverts',
};

function getGitTags() {
  try {
    const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
    return tags;
  } catch {
    return [];
  }
}

function getCommitsBetween(from, to) {
  try {
    const range = from ? `${from}..${to || 'HEAD'}` : to || 'HEAD';
    const log = execSync(
      `git log ${range} --pretty=format:"%h|%s|%an|%ad" --date=short`,
      { encoding: 'utf8' }
    );

    return log.split('\n').filter(Boolean).map(line => {
      const [hash, subject, author, date] = line.split('|');
      return { hash, subject, author, date };
    });
  } catch {
    return [];
  }
}

function parseCommit(commit) {
  const match = commit.subject.match(/^(\w+)(?:\(([^)]+)\))?:\s*(.+)$/);

  if (match) {
    return {
      ...commit,
      type: match[1],
      scope: match[2] || null,
      message: match[3],
    };
  }

  return {
    ...commit,
    type: 'other',
    scope: null,
    message: commit.subject,
  };
}

function groupCommits(commits) {
  const groups = {};

  for (const commit of commits) {
    const parsed = parseCommit(commit);
    const type = COMMIT_TYPES[parsed.type] || 'Other Changes';

    if (!groups[type]) {
      groups[type] = [];
    }

    groups[type].push(parsed);
  }

  return groups;
}

function generateChangelog() {
  const tags = getGitTags();
  const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));
  const version = packageJson.version;

  let changelog = `# Changelog

All notable changes to Biological Self will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

`;

  // Get unreleased commits
  const latestTag = tags[0];
  const unreleased = getCommitsBetween(latestTag, 'HEAD');

  if (unreleased.length > 0) {
    changelog += `## [Unreleased]\n\n`;
    const groups = groupCommits(unreleased);

    for (const [type, commits] of Object.entries(groups)) {
      changelog += `### ${type}\n\n`;
      for (const commit of commits) {
        const scope = commit.scope ? `**${commit.scope}:** ` : '';
        changelog += `- ${scope}${commit.message} ([${commit.hash}](../../commit/${commit.hash}))\n`;
      }
      changelog += '\n';
    }
  }

  // Generate for each tag
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const prevTag = tags[i + 1];

    // Get tag date
    let tagDate;
    try {
      tagDate = execSync(`git log -1 --format=%ad --date=short ${tag}`, { encoding: 'utf8' }).trim();
    } catch {
      tagDate = 'Unknown';
    }

    changelog += `## [${tag}] - ${tagDate}\n\n`;

    const commits = getCommitsBetween(prevTag, tag);
    const groups = groupCommits(commits);

    for (const [type, typeCommits] of Object.entries(groups)) {
      changelog += `### ${type}\n\n`;
      for (const commit of typeCommits) {
        const scope = commit.scope ? `**${commit.scope}:** ` : '';
        changelog += `- ${scope}${commit.message} ([${commit.hash}](../../commit/${commit.hash}))\n`;
      }
      changelog += '\n';
    }
  }

  // Add initial release note if no tags
  if (tags.length === 0) {
    changelog += `## [${version}] - ${new Date().toISOString().split('T')[0]}\n\n`;
    changelog += `### Features\n\n`;
    changelog += `- Initial release of Biological Self\n`;
    changelog += `- Local-first health data management\n`;
    changelog += `- On-device AI processing for privacy\n`;
    changelog += `- 3D anatomical visualization\n`;
    changelog += `- Cross-platform support (macOS, Windows, Linux, iOS)\n\n`;
  }

  return changelog;
}

function main() {
  console.log('Generating changelog...\n');

  const changelog = generateChangelog();
  const changelogPath = join(rootDir, 'CHANGELOG.md');

  writeFileSync(changelogPath, changelog);
  console.log(`Changelog written to: CHANGELOG.md`);
}

main();
