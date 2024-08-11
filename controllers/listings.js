const Listing=require("../modles/listing");

module.exports.index=async (req,res)=>{
    let list= await Listing.find({});
    res.render("listings/index.ejs",{list});
}
module.exports.renderNewForm=(req,res)=>{
    res.render('listings/new.ejs');
}
module.exports.showListings=async (req,res)=>{
    let {id}= req.params;                           // nested population
    const stay=await Listing.findById(`${id}`).populate({path:'reviews',populate:{ path :'author'}}).populate('owner');

    if (!stay){
        req.flash("failure","No such listing exists");
        return res.redirect('/listings');
    }
    
    res.render('listings/show.ejs',{stay});
}
module.exports.createListing=async (req,res,next)=>{
    let l1=new Listing(req.body.listing);           // req.body.listing returns a js obj
    l1.owner=req.user._id;
    let url=req.file.path;
    let filename=req.file.filename;
    l1.img={url,filename};
    await l1.save();

    req.flash("success","New Listing is added");    // it's passed in /listings by flash Mw defined in index.js
    res.redirect('/listings');
}
module.exports.renderEditForm=async (req,res)=>{
    let {id}= req.params;
    let l=await Listing.findById(id);


    if (!l){
        req.flash("failure","No such listing exists");
        return res.redirect('/listings');
    }
    res.render('listings/edit.ejs',{l});
}
module.exports.updateListing=async (req,res)=>{
    let {id}= req.params;
    let l=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    
    if (typeof req.file != "undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        l.img={url,filename};
        await l.save();
    }
    req.flash("success","Listing is updated");

    res.redirect(`/listings/${id}`);
}
module.exports.destroyListing=async (req,res)=>{
    let{id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");

    res.redirect('/listings');
}