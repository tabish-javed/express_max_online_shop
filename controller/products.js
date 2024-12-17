const products = []

function getAddProduct (req, res, next) {
  res.status(200).render('add_product', { docTitle: "Add Product", path: "/admin/add-product" })
}

function postAddProduct (req, res, next) {
  products.push({ title: req.body.title })
  res.status(302).redirect("/")
}

function getProducts (req, res, next) {
  res.status(200).render('shop', { products, docTitle: "Shop", path: "/" })
}


export default {
  getAddProduct,
  postAddProduct,
  getProducts,
  products
}