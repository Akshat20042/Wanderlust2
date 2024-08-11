// here insted of app. we write router.
// followed bt defetentiating terms api add.(s)

const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
// m/w to check whether u are loginned or not
const {isLogined,isOwner,validateListing}=require("../middlewares.js");
const ListingControllers=require("../controllers/listings.js");
// above upload
const {storage}=require("../cloudConfig.js");
// TO READ FILES .. NMP I MULTER
const multer  = require('multer')
const upload = multer({ storage })      // by default isted of storage there was -> dest: 'uploads/'

// new route
router.get('/new',isLogined,ListingControllers.renderNewForm);

//edit route
router.get('/:id/edit',isLogined,isOwner,wrapAsync(ListingControllers.renderEditForm));

router.route('/')
//index route
.get(wrapAsync(ListingControllers.index))
//create route
.post(isLogined,upload.single('listing[img]'),validateListing, wrapAsync(ListingControllers.createListing));
// .post(upload.single('listing[img]'),(req,res)=>{
//     res.send(req.file);


router.route('/:id')
//show route
.get(wrapAsync(ListingControllers.showListings))
//update route
.put(isLogined,isOwner,upload.single('listing[img]'),validateListing,wrapAsync(ListingControllers.updateListing))
// destroy route
.delete(isLogined,isOwner,wrapAsync(ListingControllers.destroyListing));




module.exports=router;