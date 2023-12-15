const express = require("express");
const router = express.Router();
const { getAllProduct, getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const  protectManagerRoute  = require("../middleware/protectRoute");

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/add", protectManagerRoute, addProduct);
router.put("/update/:id", protectManagerRoute, updateProduct);
router.delete("/delete/:id", protectManagerRoute, deleteProduct);

module.exports = router;

