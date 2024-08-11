const mongoose=require("mongoose");
const {Schema}= mongoose;
const reviewSchema =  Schema({
    comment: String,
    rate:{
        type: Number,
        min:1,
        max:5,
    },
    createdAt:{
        type:Date,
        default: Date.now()     // current date nd time
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Review = new mongoose.model("Review",reviewSchema);

module.exports= Review;