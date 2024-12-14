import express from "express"
import path from "path"
import dirName from "../utilities/dirname.js"

const router = express.Router()

const products = []

router.get("/add-product", (req, res, next) => {
  res.status(200).sendFile(path.join(dirName.__dirname, "views", "add_product.html"))
})


router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title })
  res.status(302).redirect("/")
})


export default { router, products }