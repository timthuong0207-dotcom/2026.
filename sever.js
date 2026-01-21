const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Route GET gốc để trả về file 2026.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '2026.html'));
});

// Route POST nhận dữ liệu từ client
app.post('/api/newyear', (req, res) => {
  console.log(req.body); // log dữ liệu để kiểm tra
  res.json({ status: 'ok', received: req.body });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
