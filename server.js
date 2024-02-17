const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is listnening http://127.0.0.1:3000");
});

module.exports = app;
