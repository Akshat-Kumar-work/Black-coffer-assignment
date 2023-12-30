
const DataModel = require("../models/data");

//to get all data
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

//to get topic data
exports.getTopicData = async(req,res)=>{

    try{
        const {topic} = req.body;
        const topicData = await DataModel.find({topic:topic});
        
        return res.status(200).json({
            success:true,
            message:"topic data is fetched successfully",
            data:topicData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch topic data"
        })
    }
}

//to get sector data
exports.getSectorData = async(req,res)=>{

    try{
        const {sector} = req.body;
        const sectorData = await DataModel.find({sector:sector});
        
        return res.status(200).json({
            success:true,
            message:"sector data is fetched successfully",
            data:sectorData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch sector data"
        })
    }
}

//to get region data
exports.getRegionData = async(req,res)=>{

    try{
        const {region} = req.body;
        const regionData = await DataModel.find({region:region});
        
        return res.status(200).json({
            success:true,
            message:"region data is fetched successfully",
            data:regionData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch region data"
        })
    }
}


//to get pestel data
exports.getPestleData = async(req,res)=>{

    try{
        const {pestle} = req.body;
        const pestleData = await DataModel.find({pestle:pestle});
        
        return res.status(200).json({
            success:true,
            message:"pestle data is fetched successfully",
            data:pestleData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch pestle data"
        })
    }
}

//to get source data
exports.getSourceData = async(req,res)=>{

    try{
        const {source} = req.body;
        const sourceData = await DataModel.find({source:source});
        
        return res.status(200).json({
            success:true,
            message:"source data is fetched successfully",
            data:sourceData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch source data"
        })
    }
}

//to get data according to country
exports.getCountryData = async(req,res)=>{

    try{
        const {country} = req.body;
        const countryData = await DataModel.find({country:country});
        
        return res.status(200).json({
            success:true,
            message:"country data is fetched successfully",
            data:countryData
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"unable to fetch country data"
        })
    }
}

