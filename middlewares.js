let Listing= require("./modles/listing");
const ExpressError=require("./utils/ExpressError.js");
const {reviewSchema,listingSchema} =require('./schema.js');
const Review = require("./modles/review.js");

module.exports.isLogined=(req,res,next)=>{
    if (! req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        // console.log(req.session.redirectUrl);
        req.flash("failure","You must LogIn first");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
    if (req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async (req,res,next)=>{
    let {id}= req.params;
    let l=await Listing.findById(id);
    if (! l.owner._id.equals(res.locals.loggedUser._id)){
        req.flash("failure","You are not the owner");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// MiddleWare for server side schema validation
module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if (error) throw new ExpressError(400,error.message); 
    else next();
}

// MiddleWare for server side schema validation
module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if (error) throw new ExpressError(400,error.message);
    else next();
}

module.exports.isAuthor=async(req,res,next)=>{
    let {id , r_id}= req.params;
    let rev= await Review.findById(r_id);
    if ( ! rev.author._id.equals(res.locals.loggedUser._id)){
        req.flash("failure","You are not the author");
        return res.redirect(`/listings/${id}`);
    }
    next();
}