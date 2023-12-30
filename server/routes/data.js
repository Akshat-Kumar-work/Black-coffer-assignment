// Import the required modules
const express = require("express")
const router = express.Router()

//controllers
const {getAllData , getTopicData, getSectorData , getRegionData , getPestleData , getSourceData , getCountryData} =require("../controllers/dataController");


//routes
router.get("/getAllData",getAllData);
router.post("/getTopicData",getTopicData);
router.post("/getSectorData",getSectorData);
router.post("/getRegionData",getRegionData);
router.post("/getPestleData",getPestleData);
router.post("/getSourceData",getSourceData);
router.post("/getCountryData",getCountryData);


module.exports = router;