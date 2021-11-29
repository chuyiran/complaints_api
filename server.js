const express=require('express')
const dotenv=require('dotenv')
//环境变量配置
dotenv.config({
    path:'./config/config.env'
});
const  app=express();

//端口号
const port=process.env.PORT || 3001;
//启动并监听
app.listen(port,()=>{
    console.log(`服务器已经运行在${process.env.NODE_ENV}模式中的${port}端口上！`);
});