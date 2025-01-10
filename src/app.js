const express = require("express");

const parser = require("body-parser");

const app = express();

app.use(parser.json());

app.post("/", (req, res) => {
  console.log("请求信息：", req.body);
    res.json(req.body);
//   res.status(200);
  res.json({
    code: 200,
    data: "",
    message: "",
  });
});

app.listen(3000, () => {
  console.log("server running at http://127.0.0.1:3000");
});
