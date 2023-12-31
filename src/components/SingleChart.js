import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BarChart from './BarChart';

const SingleChart = () => {

  const {currentData} = useSelector( (state)=>state.dataSlice);




  //we can use shoping cart vala design
  return (
    <div>
   {
    currentData && currentData.length > 0 ? <div>
    <BarChart currentData={currentData}/>
    </div>: <></>
   }
    </div>
  )
}

export default SingleChart