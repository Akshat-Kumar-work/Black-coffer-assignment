// Import the required modules
const express = require("express")
const router = express.Router()

const {getAllData , getTopicData, getSectorData , getRegionData , getPestleData , getSourceData , getCountryData} =require("../controllers/dataController");


//routes
router.get("/getAllData",getAllData);
router.get("/getTopicData",getTopicData);
router.get("/getSectorData",getSectorData);
router.get("/getRegionData",getRegionData);
router.get("/getPestleData",getPestleData);
router.get("/getSourceData",getSourceData);
router.get("/getCountryData",getCountryData);


module.exports = router;