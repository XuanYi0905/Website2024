const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 你已經有的其他路由和中間件
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 靜態文件設置
app.use(express.static(path.join(__dirname, 'public')));

// 你可以將以下路由添加到你的 server.js 中
app.get('/images.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'images.json'));  // 提供 images.json 文件
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
