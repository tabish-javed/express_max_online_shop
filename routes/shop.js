import express from "express"
import path from "path"
import dirName from "../utilities/dirname.js"
import adminData from '../routes/admin.js'

const router = express.Router()

router.get("/", (req, res, next) => {
  const products = adminData.products
  res.status(200).render('shop', { products, docTitle: "Shop" })
})


export default { router }