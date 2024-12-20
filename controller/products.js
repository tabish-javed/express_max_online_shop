import Product from "../models/product.js"

function getAddProduct (req, res, next) {
  res.status(200).render('add_product', { docTitle: "Add Product", path: "/admin/add-product" })
}

function postAddProduct (req, res, next) {
  const product = new Product.Product(req.body.title)
  product.save()
  res.status(302).redirect("/")
}

async function getProducts (req, res, next) {
  const products = await Product.Product.fetchAll()
  res.status(200).render('shop', { products, docTitle: "Shop", path: "/" })
}


export default {
  getAddProduct,
  postAddProduct,
  getProducts
}