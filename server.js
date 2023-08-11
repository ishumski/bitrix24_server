const express = require('express');
const app = express();
const port = 3000;
const publicHTML = './dist';
app.use(express.static(publicHTML));
console.log(`serving ${publicHTML}`);


app.get('/install', (req, res) => {
  res.sendFile(`install.html`, { root: publicHTML });
});
app.post('/install', (req, res) => {
  res.sendFile(`install.html`, { root: publicHTML });
});

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicHTML });
});
app.post('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicHTML });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
