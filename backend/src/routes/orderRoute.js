const express = require("express");
const router = express.Router();
const { getAllOrder, getOrderItem, placeOrder, updateOrderStatus } = require("../controllers/orderController")
const protectManagerRoute = require("../middleware/protectRoute");
const auth = require("../middleware/auth")

router.get("/", protectManagerRoute, getAllOrder)
router.get("/customer/:customerId", auth, getOrderItem)
router.post("/place", auth, placeOrder)
router.patch("/update/:orderId", protectManagerRoute, updateOrderStatus)


module.exports = router
