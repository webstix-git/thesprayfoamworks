const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3001);
const root = path.join(__dirname, '..');

function run(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return '';
  }
}

function killPort(port) {
  const isWindows = process.platform === 'win32';
  const output = isWindows
    ? run(`netstat -ano | findstr :${port}`)
    : run(`fuser -n tcp ${port} 2>/dev/null`);
  const pids = new Set();

  for (const line of output.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || (isWindows && !trimmed.includes('LISTENING'))) continue;
    const parts = trimmed.split(/\s+/);
    const pid = isWindows ? parts[parts.length - 1] : parts[0];
    if (pid && /^\d+$/.test(pid) && pid !== '0') pids.add(pid);
  }

  for (const pid of pids) {
    run(isWindows ? `taskkill /F /PID ${pid}` : `kill ${pid}`);
    console.log(`Stopped process ${pid} on port ${port}`);
  }
}

for (const port of [PORT, 3000, 3001, 3002, 3003]) {
  killPort(port);
}

// Always wipe .next before dev — mixing `next build` + `next dev` corrupts the cache.
const nextDir = path.join(root, '.next');
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('Removed .next cache');
}

console.log(`Starting dev server at http://localhost:${PORT}`);

const child = spawn('npx', ['next', 'dev', '-p', String(PORT)], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => process.exit(code ?? 0));
