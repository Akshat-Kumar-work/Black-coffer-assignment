import {dataEndPoints} from "../api";
import {apiConnector} from "../apiConnector";
import { setCurrentData } from "../../slices/dataSlice";

const {GET_ALLDATA , GET_COUNTRYDATA ,GET_PESTLEDATA , GET_REGIONDATA , GET_SECTORDATA , GET_SOURCEDATA , GET_TOPICDATA} = dataEndPoints;


export  function getAllData () {

    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("GET", GET_ALLDATA)
            console.log("get all data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get all data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}


export  function getTopicData (topic) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_TOPICDATA,{
                topic:topic
            })
            console.log("get topic data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get topic data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}



export  function getSectorData (sector) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_SECTORDATA,{
                sector:sector
            })
            console.log("get sector data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get sector data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}




export  function getRegionData (region) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_REGIONDATA,{
                region:region
            })
            console.log("get region data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get region data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}




export  function getPestleData (pestle) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_PESTLEDATA,{
                pestle:pestle
            })
            console.log("get pestle data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get pestle data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}



export  function getSourceData (source) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_SOURCEDATA,{
                source:source
            })
            console.log("get source data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get source data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}



export  function getCountryData (country) {
    let Data = []
    return async (dispatch)=>{
        try{
            const response = await apiConnector("POST", GET_COUNTRYDATA,{
                country:country
            })
            console.log("get country data response",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            Data = response.data.data

        }
        catch(err){
            console.log("get country data api error",err)
        }
        dispatch(setCurrentData(Data))
    }
}
