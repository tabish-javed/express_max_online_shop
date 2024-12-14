import https from "https"
import express from "express"
import path from "path"
import fs from "fs"
// external imports
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"
import dirName from "./utilities/dirname.js"

// environment variables
const PORT = 3_000
const CERT_DIR = `${dirName.__dirname}/cert`
const options = {
  key: fs.readFileSync(`${CERT_DIR}/privatekey.pem`),
  cert: fs.readFileSync(`${CERT_DIR}/certificate.pem`)
}

const app = express()

// app configuration
app.set("view engine", "pug")
app.set("views", "views")

// http.createServer(app).listen(80)
// https.createServer({}, app).listen(443)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(dirName.__dirname, "public")))

app.use("/admin", adminRoutes.router)
app.use(shopRoutes.router)

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(dirName.__dirname, "views", "404.html"))
})


// start server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`)
})