const express=require("express");
const router =express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {listingSchema}=require("../schema.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const Listing=require("../models/listing.js");
const Order=require("../models/order.js");

const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage })

//index router and create route
router.route("/")
.get(wrapAsync(listingController.index))       
.post(upload.single('listing[image]'), wrapAsync(listingController.createListing)) 


//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//show route and update route and delete route
router.route("/:id")
.get(isLoggedIn,wrapAsync(listingController.showListing))
.put(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))

router.get("/:id/booking/book",isLoggedIn,wrapAsync(listingController.bookListing))

router.post("/:id/booking/book/payment", wrapAsync(listingController.payment)) 




//router.delete("/orders/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyOrder))

module.exports=router;