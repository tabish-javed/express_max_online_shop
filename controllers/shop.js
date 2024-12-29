import Product from "../models/product.js"



async function getProducts (req, res, next) {
  const products = await Product.Product.fetchAll()
  res.status(200).render("./shop/product_list", { products, docTitle: "All Products", path: "/products" })
}

async function getIndex (req, res, next) {
  const products = await Product.Product.fetchAll()
  res.status(200).render("./shop/index", { products, docTitle: "Shop", path: "/" })
}

function getCart (req, res, next) {
  res.render("./shop/cart", { path: "/cart", docTitle: "Your cart" })
}

function getCheckout (req, res, next) {
  res.render("./shop/checkout", { path: "/checkout", docTitle: "Checkout" })
}


export default {
  getProducts,
  getIndex,
  getCart,
  getCheckout
}