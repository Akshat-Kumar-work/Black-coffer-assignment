// Import the required modules
const express = require("express")
const router = express.Router()

const {getAllData} =require("../controllers/dataController");


//routes
router.get("/getAllData",getAllData);

module.exports = router;