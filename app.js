import express from "express"
import path from "path"

// import bodyParser from "body-parser"
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"
import dirName from "./utilities/dirname.js"

export const app = express()
const port = 3_000

// http.createServer(app).listen(80)
// https.createServer({}, app).listen(443)

app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.static(path.join(dirName.__dirname, "public")))

app.use("/admin", adminRoutes.router)
app.use(shopRoutes.router)

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(dirName.__dirname, "views", "404.html"))
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
