//模拟数据
const express = require('express');

//const app = express();
const mockData = require('./public/mock/data.json');
const mockDataGoods = require('./public/mock/goods.json');
// var apiRoutes = express.Router();
// app.use('/api',apiRoutes);

module.exports = {
       // webpack-dev-server 相关配置
    devServer: {
      port:8081,
      before(app){
        app.get('/goods',(req, res, next)=>{
          res.json({
            errno: 0,
            data: mockData.goods
          })
        });
        app.get('/seller',(req, res, next)=>{
          res.json({
            errno: 0,
            data: mockData.seller
          })
        });
        app.get('/ratings',(req, res, next)=>{
          res.json({
            errno: 0,
            data: mockData.ratings
          })
        });
        app.get('/goods/list',(req, res, next)=>{
          //console.log(req);
          res.json({
            errno: 0,
            data: mockDataGoods
          })
        })
      }

    },
};
