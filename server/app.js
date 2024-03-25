//server-->app.js

const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const session = require('express-session');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const cors = require('cors');

const userRouter = require('./routes/userRoute');
const homeRouter = require("./routes/homeRoute");

const app = express();

//连接与启动

//打印日志美化
app.use(logger("dev"));

//连接数据库
const url = "mongodb+srv://user:EXIlkZCmgHf9l0Dw@atlascluster.11qndnr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
async function main() {
  try {
    await mongoose.connect(url);
    console.log("连接到MongoDB成功");
  } catch (err) {
    console.log(err,"无法连接");
  }
}
main();


//识别与转译
//解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//会话
app.use(cookieParser());
app.use(session({
  secret: 'airbnb imitate',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:1000*60*60*24,
    httpOnly:true,
    secure:false
  }
}));


//页面显示
//静态资源
app.use(express.static(path.join(__dirname, 'public')));

//跨域设置
const corsOptions = {
  origin:"http://localhost:3000", 
  credentials:true,
}
app.use(cors(corsOptions));

//路由
app.use("/", homeRouter);
app.use('/user', userRouter);

//404页面
app.use(function (req, res, next) {
  next(createError(404));
});

//错误处理
app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


