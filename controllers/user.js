const User=require("../modles/user.js");

module.exports.renderSignUpForm=(req,res)=>{
    res.render("users/signup.ejs");
};
module.exports.signup=async(req,res)=>{
    try{                        // i.e if a username is trying to re-regestring
    let {username,email,password}=req.body;
    let newUser= new User({email,username});
    let regUser= await User.register(newUser,password);
    req.flash("success","Welcome to WanderLust");
    req.logIn(regUser,(err)=>{
        if (err){
            next(err);
        }
        req.flash("success","You logged in");
        res.redirect("/listings");
    });
    }
    catch(e){
        req.flash("failure",e.message);
        res.redirect("/signup");
    }
    
};
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};
module.exports.login=async(req,res)=>{
    req.flash("success","Welcome to WanderLust");
    let directTo = res.locals.redirectUrl || "/listings";
    res.redirect(directTo);
};
module.exports.logout=(req,res)=>{
    req.logOut((err)=>{
        if (err){
            nex(err);
        }
        req.flash("success","You logged out");
        res.redirect("/listings");
    });
};