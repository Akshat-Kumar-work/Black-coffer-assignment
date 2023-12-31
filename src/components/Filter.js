import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { topicData } from '../filterData/topic';
import { regionData } from '../filterData/region';
import { sectorData } from '../filterData/sector';
import { sourceData } from '../filterData/source';
import { pestleData } from '../filterData/pestle';
import { countryData } from '../filterData/country';

import { useDispatch } from "react-redux";
import {getTopicData , getCountryData , getPestleData ,getRegionData , getSectorData , getSourceData } from "../services/operations/dataApi";




const Filter = () => {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [optionsDialogOpen, setOptionsDialogOpen] = useState(false);

  //we will get selected filter option from here
  const [selectedOption, setSelectedOption] = useState(null);



// //main selected sub -sub option
// const [filterToApply , setFilterToApply] = useState(null);

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterClose = () => {
    setFilterDialogOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionsDialogOpen(true);
  };

  const handleOptionsClose = () => {
    setOptionsDialogOpen(false);
  };


  const dispatch = useDispatch();


  //functions to handle onclick of filters
function onClickTopic (topic){

  dispatch(getTopicData(topic));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}

function onClickSector (sector){

  dispatch(getSectorData(sector));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}

function onClickRegion (region){

  dispatch(getRegionData(region));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}

function onClickPestle (pestle){

  dispatch(getPestleData(pestle));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}

function onClickSource (source){

  dispatch(getSourceData(source));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}

function onClickCountry (country){

  dispatch(getCountryData(country));
  setFilterDialogOpen(false)
  setOptionsDialogOpen(false)
}



  return (
    <div>
      <div
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          textAlign:"center"
        }}
        onClick={handleFilterClick}
        
      >
    
       Filters
      </div>

      <Dialog open={filterDialogOpen} onClose={handleFilterClose}>
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click on any option to select particular filter.
          </DialogContentText>
          <Button onClick={() => handleOptionClick('topic')}>
           Topic
          </Button>
          <Button onClick={() => handleOptionClick('sector')}>
            Sector
          </Button>
          <Button onClick={() => handleOptionClick('region')}>
            Region
          </Button>
          <Button onClick={() => handleOptionClick('pestle')}>
            Pestle
          </Button>
          <Button onClick={() => handleOptionClick('source')}>
            Source
          </Button>
          <Button onClick={() => handleOptionClick('country')}>
            Country
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {selectedOption && (
        <Dialog open={optionsDialogOpen} onClose={handleOptionsClose}>
          <DialogTitle>{`Options for ${selectedOption}`}</DialogTitle>

          <DialogContent>

          {/* here we will add option for selected filter */}

            <DialogContentText>
            Please select any {selectedOption} to apply filter.
            </DialogContentText>
            {/* Add more content or options here */}

            {/* agaar selected option topic hai  on click of option handle filter and handle option will also call with api*/}
            {selectedOption === "topic" ? 
            topicData.map( (topic)=>{
              
                return (
                    <Button key={topic}  onClick={()=>onClickTopic(topic)}>
                        {topic}
                    </Button>
                )
            })
            : <></>}

            {/* agaar selected option region hai */}
            {selectedOption === "region" ? 
            regionData.map( (region)=>{
          
                return (
                    <Button key={region} onClick={()=>onClickRegion(region)}>
                        {region}
                    </Button>
                )
            })
            : <></>}

               {/* agaar selected option sector hai */}
               {selectedOption === "sector" ? 
            sectorData.map( (sector)=>{
                return (
                    <Button key={sector} onClick={()=>onClickSector(sector)}>
                        {sector}
                    </Button>
                )
            })
            : <></>}

             {/* agaar selected option source  hai */}
             {selectedOption === "source" ? 
            sourceData.map( (source)=>{
                return (
                    <Button key={source} onClick={()=>onClickSource(source)}>
                        {source}
                    </Button>
                )
            })
            : <></>}

              {/* agaar selected option pestle  hai */}
              {selectedOption === "pestle" ? 
            pestleData.map( (pestle)=>{
                return (
                    <Button key={pestle} onClick={()=>onClickPestle(pestle)}>
                        {pestle}
                    </Button>
                )
            })
            : <></>}

              {/* agaar selected option country  hai */}
              {selectedOption === "country" ? 
            countryData.map( (country)=>{
                return (
                    <Button key={country} onClick={()=>onClickCountry(country)} >
                        {country}
                    </Button>
                )
            })
            : <></>}

          </DialogContent>

          <DialogActions>

            <Button onClick={handleOptionsClose}>Close</Button>

          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Filter;
