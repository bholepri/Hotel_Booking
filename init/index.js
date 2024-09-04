const mongoose=require("mongoose");
const  initData=require("./data.js");
const Listing =require("../models/listing.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj) => ({...obj,owner:"66d296d90b583e6cd59fc596",}))
    await Listing.insertMany(initData.data);
    console.log("data is Saved");
}
initDB();