import express from "express"
import adminController from "../controller/admin.js"

const router = express.Router()


router.get("/add-product", adminController.getAddProduct)
router.get("/products", adminController.getProducts)
router.post("/add-product", adminController.postAddProduct)


export default { router }