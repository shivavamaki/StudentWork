const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const dataDir = path.join(rootDir, 'data');
const entriesFile = path.join(dataDir, 'entries.json');
const expirationsFile = path.join(dataDir, 'expirations.json');

function ensureDataFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(entriesFile)) fs.writeFileSync(entriesFile, '[]');
  if (!fs.existsSync(expirationsFile)) fs.writeFileSync(expirationsFile, '[]');
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    return [];
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  ensureDataFiles();
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/api/entries') {
    const entries = readJson(entriesFile);
    const selectedDate = url.searchParams.get('date');
    const filtered = selectedDate
      ? entries.filter(entry => entry.date === selectedDate)
      : entries;
    return sendJson(res, 200, filtered);
  }

  if (req.method === 'POST' && url.pathname === '/api/entries') {
    try {
      const payload = await parseBody(req);
      const entries = readJson(entriesFile);
      const nextEntries = entries.filter(entry => entry.date !== payload.date);
      nextEntries.push(payload);
      writeJson(entriesFile, nextEntries);
      return sendJson(res, 200, { ok: true });
    } catch (err) {
      return sendJson(res, 400, { error: err.message });
    }
  }

  if (req.method === 'GET' && url.pathname === '/api/expirations') {
    return sendJson(res, 200, readJson(expirationsFile));
  }

  if (req.method === 'POST' && url.pathname === '/api/expirations') {
    try {
      const payload = await parseBody(req);
      writeJson(expirationsFile, Array.isArray(payload) ? payload : payload.entries || []);
      return sendJson(res, 200, { ok: true });
    } catch (err) {
      return sendJson(res, 400, { error: err.message });
    }
  }

  if (req.method === 'GET' && url.pathname === '/') {
    return serveFile(res, path.join(rootDir, 'demo.html'), 'text/html; charset=utf-8');
  }

  if (req.method === 'GET' && url.pathname === '/demo.html') {
    return serveFile(res, path.join(rootDir, 'demo.html'), 'text/html; charset=utf-8');
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
