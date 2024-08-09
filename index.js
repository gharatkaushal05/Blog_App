const express =require ("express")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 3000 

app.use(express.json())
const blog = require("./routes/blog");
const dbConnect = require("./config/database");

app.use("/api/v1",blog)

dbConnect()

app.listen(PORT,()=>{
    console.log("App Started at PORT 4000")
})

app.get("/",(req, res)=> {

    res.send("<h1>Welcome to Shutter Island</h1>")
})