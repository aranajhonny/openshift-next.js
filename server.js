const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    handle(req, res, parsedUrl)
  })
  .listen(port, ipaddress, (err) => {
    if (err) throw err
  })
})
