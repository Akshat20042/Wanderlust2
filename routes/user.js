const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}= require("../middlewares.js");
const UserControllers=require("../controllers/user.js");

router.get("/signup",UserControllers.renderSignUpForm);

router.post("/signup",wrapAsync(UserControllers.signup));

router.get("/login",UserControllers.renderLoginForm);

router.post("/login",saveRedirectUrl,passport.authenticate("local" , {failureRedirect: "/login",failureFlash :true }), UserControllers.login);

router.get("/logout",UserControllers.logout);

module.exports =router;