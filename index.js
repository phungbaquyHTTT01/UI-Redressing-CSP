const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = 3002;

// Cấu hình CSP ngăn iframe từ domain ngoài
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      frameAncestors: ["'none'"]
    }
  })
);

// Phục vụ thư mục chứa giao diện thực hành
app.use(express.static(path.join(__dirname, 'ui-redressing')));

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});