const BASE_URL = process.env.REACT_APP_BASE_URL;

export const dataEndPoints = {
    GET_ALLDATA : BASE_URL+"/getAllData",
    GET_TOPICDATA: BASE_URL+"/getTopicData",
    GET_SECTORDATA: BASE_URL+"/getSectorData",
    GET_REGIONDATA: BASE_URL+"/getRegionData",
    GET_PESTLEDATA: BASE_URL+"/getPestleData",
    GET_SOURCEDATA: BASE_URL+"/getSourceData",
    GET_COUNTRYDATA: BASE_URL+"/getCountryData"
}