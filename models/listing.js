const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        file:String
    },
    price:Number,
    rating:Double,
    address:String,
    location:String,
    phone:Number,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

listingSchema.post("findOneAndDelete", async (listing)=>{
   if(listing){
    await Review.deleteMany({_id: {$in :listing.reviews}});
   }
})

module.exports = mongoose.model("Listing",listingSchema);
