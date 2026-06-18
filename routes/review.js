const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing=require("C:/Users/chait/Downloads/Project/models/listing.js");
const Review=require("C:/Users/chait/Downloads/Project/models/review.js");
const {isLoggedIn,validateReview,isReviewAuthor}=require("../middleware.js");
const flash=require("connect-flash");
const reviewController=require("../controllers/review.js");

//Reviews
//POST REVIEW ROUTE
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//DELETE REVIEW ROUTE
router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.destroyReview));
module.exports=router;
