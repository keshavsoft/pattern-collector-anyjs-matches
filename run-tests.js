import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import getLatestVersion from './bin/core/getLatestVersion.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const latestVersion = getLatestVersion();
const testDir = path.join(__dirname, 'test', latestVersion);

console.log(`Running tests for ${latestVersion}...`);
const result = spawnSync('node', ['test.js'], {
    cwd: testDir,
    stdio: 'inherit'
});

if (result.status !== 0) {
    process.exit(result.status || 1);
}
