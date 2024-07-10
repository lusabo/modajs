// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve the static files from the "public" directory
app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.send('Hello, Raspberry Pi!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
