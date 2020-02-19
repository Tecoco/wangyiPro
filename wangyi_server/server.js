//引入koa和koa-router
let Koa = require('koa');
let KoaRouter = require('koa-router');

//生成应用
const app = new Koa();
const router = new KoaRouter();


let indexData = require('./datas');
// console.log('首页数据====', indexData);

router.get('/getIndex', (ctx, next) => {
  ctx.body = indexData;
});

//安装路由器，声明使用中间件
app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen('8087', () => {
  console.log('服务器地址: http://localhost:8087');
})
