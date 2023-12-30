
const DataModel = require("../models/data");
exports.getAllData = async(req,res)=>{
    try{
        const allData = await DataModel.find({});
        return res.status(200).json({
            success:true,
            message:"all data fetched",
            data:allData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch  data",
            
        })
    }
}