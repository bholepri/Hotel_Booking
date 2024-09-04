const express=require("express");
const router =express.Router();
const Order=require("../models/order.js");
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl,isOwner}=require("../middleware.js");

const adminController=require("../controllers/admin.js");


router.get("/orders" , adminController.orders);

//router.delete("/orders/:id" , adminController.destroyOrder);

router.post("/orders/:id",adminController.orderStatus)

router.get("/users" , adminController.users);

module.exports=router;