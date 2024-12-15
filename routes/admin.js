import express from "express"
import path from "path"
import dirName from "../utilities/dirname.js"

const router = express.Router()

const products = []

router.get("/add-product", (req, res, next) => {
  res.status(200).render('add_product')
})


router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title })
  res.status(302).redirect("/")
})


export default { router, products }