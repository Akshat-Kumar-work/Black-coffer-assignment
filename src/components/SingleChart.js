import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const SingleChart = () => {

  const currentData = useSelector( (state)=>state.dataSlice);


  const [cardData , setCardData] = useState([]);

  useEffect(()=>{
    setCardData(currentData)
  },[currentData])


  //we can use shoping cart vala design
  return (
    <div>
   {
    cardData.currentData && cardData.currentData.length > 0 ? <div>
      {
        cardData.currentData.map( (arr)=>{
         return(
         <div key={arr._id}>
         {console.log(arr)}
          {/* card copy krnege div functionality k lie and chart bhi render krwana hai */}
          <div>{arr.sector}</div>
         </div>) 
        })
      }
    </div>: <></>
   }
    </div>
  )
}

export default SingleChart