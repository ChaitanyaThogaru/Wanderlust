const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing=require("../models/listing.js");

const Mongo_URL= 'mongodb://127.0.0.1:27017/wanderlust'

main()
   .then(()=>{
    console.log("connected to DB");
   })
   .catch((err)=>{
    console.log(err);
   });

async function main(){
    await mongoose.connect(Mongo_URL);
}

const initDB=async() =>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner:'6922febc34cd29d341510c91'}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
};

initDB();
