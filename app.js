if (process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
// console.log(process.env.SECRET)

const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
// const Listing=require("./modles/listing");
const ejsMate= require("ejs-mate");
// const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
// const {reviewSchema,listingSchema} =require('./schema.js');
// const Review=require("./modles/review");
const mongoose=require("mongoose");

// for express routs
const listingsRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

const MongoStore = require('connect-mongo');
// for flashes and sessions
const session= require("express-session");
const flash=require('connect-flash');

// npm i passport
// npm i passport-local
// npm i passport-local-mongoose
const passport=require("passport");
const LocalStratergy = require("passport-local");
const User =require("./modles/user.js");

const dbUrl=process.env.ATLASDB_URL;
const store=MongoStore.create({
    mongoUrl: dbUrl,
    crypto :{
        secret : process.env.SECRET,
    },
    touchAfter: 24*3600,                // in seconds (if there is no change in db then after how much time it should be updated)
});
store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE", err);
})
let sessionOptions={
    store: store,
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized : true,
    cookie :{
        expires : Date.now() + 7*24*60*60*1000,     // time in ms
        maxAge: 7*24*60*60*1000,
        httpOnly: true                              // by default it's true only ..used for security purposes
    }
};

app.use(session(sessionOptions));        // creates a session id as cookie
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));  // last 3 are static functions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleWare for flash .. passed as arguments in ejs files
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");                
    res.locals.failure=req.flash("failure");
    res.locals.loggedUser=req.user;     // for signUp/login in nav bar
    next();
})



main().then(res=>{console.log("Database Connected!!");})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect(dbUrl);            // inssted of 'mongodb://127.0.0.1:27017/wanderlust'
}

app.listen(8080,()=>{
    console.log('server 8080 ready');
})



// Ejs to render multiple ejs files present in views folder
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
// use to run static files such as js or css files present in public folder
app.use(express.static(path.join(__dirname,"public")));
// without it we can'nt read post requests
app.use(express.urlencoded({extended: true}));
// use to run put and delete methods
app.use(methodOverride("_method"));
// for ejs mate
app.engine("ejs",ejsMate);

// app.get('/',(req,res)=>{
//     res.send("Hi!,I'm root");
// })

// fake user
app.get("/fakeUser",async (req,res)=>{
    let newUser={
        email: "abc@gmail.com",
        username: "ajay2529"
    }                      // datas, password
    let u=await User.register(newUser,"helloworld");
    res.send(u);
})

// express routs
// here we write common api address of theirs
app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found"))
    
})
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render('listings/error.ejs',{message});
})

