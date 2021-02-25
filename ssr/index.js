const Koa = require("koa")
const app = new Koa()
const path = require("path")
const fs = require("fs")

const koaStatic = require("koa-static")
app.use(koaStatic(path.resolve(__dirname,'../dist/client'),{index:false}));
const serverBundle = require(path.resolve(__dirname, "../dist/server/vue-ssr-server-bundle.json"))
const template = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf-8")
const clientManifest = require(path.resolve(__dirname, "../dist/client/vue-ssr-client-manifest.json"))
// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

app.use(async (ctx, next) => {
    console.count("enter")
    let context = {
        title: "vue ssr",
        url: ctx.url
    }
    let html = await renderer.renderToString(context)
    ctx.body = html
})

app.listen(4000, () => {
    console.log("listen")
})