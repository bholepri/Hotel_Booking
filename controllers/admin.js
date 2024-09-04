const Order=require("../models/order.js");
const User=require("../models/user.js");

module.exports.orders=async(req,res)=>{
    const allOrders = await Order.find({});
    res.render("booking/order.ejs",{allOrders});
};

// module.exports.destroyOrder=async (req,res)=>{
//     let {id}=req.params;
//    await Order.findByIdAndDelete(id);
//    req.flash("success" , "Order Done!");
//     res.redirect("/orders");
// };

module.exports.orderStatus=async (req,res)=>{
    let {id}=req.params;
    let order=await Order.findByIdAndUpdate(id,{...req.body.order});
   order.status="Successful!";
   await order.save();
   req.flash("success" , "Order Placed Sucessfully!");
    res.redirect("/orders");
};


module.exports.users=async(req,res)=>{
    const allUsers = await User.find({});
    res.render("booking/user.ejs",{allUsers});
};
