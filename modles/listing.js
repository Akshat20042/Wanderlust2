const mongoose=require("mongoose");
const {Schema}= mongoose;
const Review= require('./review.js');
const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        // required:true
    },
    disc:{
        type: String,
        // required:true
    },
    img:{
        url: String,
        filename: String
    },
    price:{
        type : Number,
        min:0
    },
    loc:{
        type: String,
        // required:true
    },
    ctry:{
        type:String,
        // required:true
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        // console.log("Hi");
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing = new mongoose.model("Listing",listingSchema);

module.exports= Listing;