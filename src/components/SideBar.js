import React from 'react'
import Filter from './Filter'

const SideBar = () => {
  return (
    <div>

<div  className="flex flex-wrap lg:h-[calc(100vh-3.5rem)] min-w-[220px] flex-row lg:flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">

    <div className=' flex flex-row lg:flex-col flex-wrap gap-8'>
       <div className=' p-[10px] '>Dashboard</div>
       <div> <Filter/> </div>
    </div>

    <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700"></div>

   

</div>

      
</div>
  )
}

export default SideBar