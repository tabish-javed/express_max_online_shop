import express from "express"
import path from "path"
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"
import dirName from "./utilities/dirname.js"


const app = express()


// app configuration
app.set("view engine", "pug")
app.set("views", "views")


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
  res.status(404).render("404")
})


export default app