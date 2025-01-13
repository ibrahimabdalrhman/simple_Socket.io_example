const express = require("express");
const router = express.Router();
const { newOrder, getAll, updateOrder, deleteOrder } = require("../controllers/orderController");

router.post("/new-order", newOrder);
router.get("/all-orders", getAll);
router.patch("/update-order/:id", updateOrder);
router.delete("/delete-order/:id", deleteOrder);

module.exports = router;
