const express = require("express");
const app = express();
const cors = require("cors")
const dataRoute  = require("./routes/data")

require("dotenv").config();
const database = require("./config/dbConnect");
const PORT = process.env.PORT || 4000;

//for cross connection
app.use( cors({origin: "*" , credentials:true}));


//connnecting with db
database.connect();

//to use json data
app.use(express.json());


//mounting of route
app.use("/api/v1",dataRoute)

//default route
app.get("/",(req , res)=>{
    return res.json({
        success:true,
        message:"server is running"
    })
});

//starting port
app.listen(PORT,()=>{
    console.log("app is running fine")
})
