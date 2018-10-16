/*const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000,()=>{
    console.log("success");
});*/
let  copy = require("copy-dir");
copy("D://svg","D://abc",()=>{
  console.log("复制成功")
})