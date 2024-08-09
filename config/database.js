const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URI,{})
    .then(()=> {
        console.log("DB Connected Successfully")
    })
    .catch(()=>{
        console.log("Failed to Connect")
        console.log(error)
        process.exit(1);
    })
}

module.exports = dbConnect;