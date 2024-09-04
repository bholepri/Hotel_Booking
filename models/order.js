
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const orderSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String ,
    },
    address:{
        type:String ,
    },
    days:{
        type:Number,
    },
    rooms:{
        type:Number,
    },
    date:{
        type:Date,
    },
    listingName:{
        type:String,
    },
    status:{
        type:String,
        default:"Pending!",
    }
})

module.exports=mongoose.model("Order",orderSchema);
