const Listing=require("../modles/listing");
const Review=require("../modles/review");

module.exports.postReview=async(req,res)=>{
    let {id}=req.params;
    let review=req.body.review;
    let rev=new Review(review);
    rev.author=req.user._id;
    await rev.save();
    let l=await Listing.findById(id);
    l.reviews.push(rev);
    await l.save();

    req.flash("success","Review is added");

    res.redirect(`/listings/${id}`);
};
module.exports.destroyReview=async(req,res)=>{
    let {id , r_id}= req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : r_id} });      // $pull is used to filter out objs from reviews..      it basically pulls out
    await Review.findByIdAndDelete(r_id);

    req.flash("success","Review is deleted");

    res.redirect(`/listings/${id}`);
};