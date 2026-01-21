const express = require('express');
const app = express();

// Render sẽ cấp PORT qua biến môi trường, nếu không có thì mặc định 3000
const port = process.env.PORT || 3000;

// Cho phép đọc dữ liệu JSON từ client
app.use(express.json());

// Cho phép phục vụ file tĩnh (ví dụ: 2026.html)
app.use(express.static(__dirname));

// Route nhận dữ liệu từ 2026.html
app.post('/api/newyear', (req, res) => {
    console.log("Dữ liệu nhận từ client:", req.body);
    // Bạn có thể lưu vào file hoặc database ở đây
    res.json({ status: 'ok', received: req.body });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
