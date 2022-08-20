// 1、引入相关包
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// 设置允许跨域访问该服务
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// 导入笑话数据
var data = require('./data.json')
app.get("/data", (req, res) => {
  // 把笑话数据返回给客户端
  res.send(data);
});
app.get("/a1",(req,res)=>{
    setTimeout(() => {
        res.send('hello a1')
    }, 1000);
});
app.get("/a2",(req,res)=>{
    setTimeout(() => {
        res.send('hello a2')
    }, 2000);
});
app.get("/a3",(req,res)=>{
    setTimeout(() => {
        res.send('hello a3')
    }, 3000);
});
// 注册路由模块，让路由模块中的代码能够使用
app.listen(3001, () => {
  console.log("runing http://127.0.0.1:3001");
});