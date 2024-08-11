const express=require('express');
const router=express.Router( {mergeParams : true} );        // if we need some data from parent add
const wrapAsync=require("../utils/wrapAsync.js");
// m/w to check whether u are loginned or not
const {isLogined,validateReview, isAuthor}=require("../middlewares.js");
const ReviewControllers= require("../controllers/review.js")

router.post("/",isLogined,validateReview,wrapAsync(ReviewControllers.postReview))


router.delete('/:r_id',isLogined,isAuthor,wrapAsync(ReviewControllers.destroyReview));

module.exports =router;