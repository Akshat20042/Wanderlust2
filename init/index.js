const mongoose=require("mongoose");
const Listing=require("../modles/listing");
// module.exports = { sampleListings };
const initData=require("./data.js");

main().then(res=>{console.log("Database Connected!!");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initDB= async()=>{
    await Listing.deleteMany({}).then(res=>{console.log("Deleted")});
    initData.data=initData.data.map((obj)=>({...obj,owner :'668eceb5c6ca95bd732b802b' })); //id is of abhayraj5704
    await Listing.insertMany(initData.data);
    console.log('Data Initialized');
};

initDB();