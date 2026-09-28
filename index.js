const express = require('express');
const path = require('path');

const app = express();

app.get('/api/config', (_req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ wsUrl: process.env.GAME_WS_URL || '' });
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

module.exports = app;
