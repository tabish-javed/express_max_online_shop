import express from "express"
import path from "path"
import dirName from "../utilities/dirname.js"
import adminRoutes from '../routes/admin.js'

const router = express.Router()

router.get("/", (req, res, next) => {
  console.log(adminRoutes.products)
  res.status(200).sendFile(path.join(dirName.__dirname, "views", "shop.html"))
})

export default { router }