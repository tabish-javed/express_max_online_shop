import Product from "../models/product.js"

function getAddProduct (req, res, next) {
  res.status(200).render('./admin/add_product', { docTitle: "Add Product", path: "/admin/add-product" })
}

function postAddProduct (req, res, next) {
  const product = new Product.Product(req.body.title)
  product.save()
  res.status(302).redirect("/")
}

async function getProducts (req, res, next) {
  const products = await Product.Product.fetchAll()
  res.status(200).render("./shop/product_list", { products, docTitle: "Shop", path: "/" })
}

/* // ANOTHER WAY OF HANDLING PRODUCTS USING CALLBACK - CHECK PRODUCT.JS
function getProducts (req, res, next) {
  Product.Product.fetchAll((products) => {
    res.status(200).render('shop', { products, docTitle: "Shop", path: "/" })
  })
}
*/


export default {
  getAddProduct,
  postAddProduct,
  getProducts
}