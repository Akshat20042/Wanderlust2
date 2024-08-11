const mongoose=require("mongoose");
const {Schema}= mongoose;
const passportLocalMongoose= require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required : true
    }
})

userSchema.plugin(passportLocalMongoose);         //by default creats feild as username and password ... hashing, salting,authentication is handelled by it

module.exports =mongoose.model("User",userSchema);