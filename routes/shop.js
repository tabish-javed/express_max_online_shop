import express from "express"
import shopController from "../controller/shop.js"

const router = express.Router()

router.get("/", shopController.getIndex)
router.get("/products", shopController.getProducts)
router.get("/cart", shopController.getCart)
router.get("/checkout", shopController.getCheckout)


export default { router }
