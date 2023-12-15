const express = require("express");
const router = express.Router();
const { addToCart, getAllCartItem, updateCartItem, removeFromCart } = require("../controllers/cartController");
const auth = require("../middleware/auth")

router.get("/",auth,getAllCartItem)
router.post("/add",auth,addToCart)
router.put("/update",auth,updateCartItem)
router.delete("/delete/:id",auth,removeFromCart)


module.exports = router;