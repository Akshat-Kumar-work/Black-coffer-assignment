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

const Filter = () => {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [optionsDialogOpen, setOptionsDialogOpen] = useState(false);

  //we will get selected filter option from here
  const [selectedOption, setSelectedOption] = useState(null);

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
                    <Button>
                        {topic}
                    </Button>
                )
            })
            : <></>}

            {/* agaar selected option region hai */}
            {selectedOption === "region" ? 
            regionData.map( (region)=>{
                return (
                    <Button>
                        {region}
                    </Button>
                )
            })
            : <></>}

               {/* agaar selected option sector hai */}
               {selectedOption === "sector" ? 
            sectorData.map( (sector)=>{
                return (
                    <Button>
                        {sector}
                    </Button>
                )
            })
            : <></>}

             {/* agaar selected option source  hai */}
             {selectedOption === "source" ? 
            sourceData.map( (source)=>{
                return (
                    <Button>
                        {source}
                    </Button>
                )
            })
            : <></>}

              {/* agaar selected option pestle  hai */}
              {selectedOption === "pestle" ? 
            pestleData.map( (pestle)=>{
                return (
                    <Button>
                        {pestle}
                    </Button>
                )
            })
            : <></>}

              {/* agaar selected option country  hai */}
              {selectedOption === "country" ? 
            countryData.map( (country)=>{
                return (
                    <Button >
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
