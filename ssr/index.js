const Koa = require("koa")
const app = new Koa()

const Router = require("koa-router")
const router = new Router()

const Vue = require('vue')
const vm = new Vue({
    template: `<div>Hello World</div>`
})



// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

router.get("/", (ctx, next) => {
    renderer.renderToString(vm).then(html => {
        ctx.body = html
    }).catch(err => {
        console.error(err)
    })
})

app.use(router.routes())

app.listen(4000, () => {
    console.log("listen")
})