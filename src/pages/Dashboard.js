import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="relative  flex-wrap flex min-h-[calc(100vh-3.5rem)] lg:flex-row flex-col">


      {/* sidebar for links */}
       <SideBar/>
    
       <div className='h-[calc(100vh-3.5rem)] overflow-auto flex-1 '>
                    <div className=' mx-auto w-11/12 max-w-[1000px] py-10'>
                      <Outlet/>
                    </div>
            </div>
        
    </div>
  )
}

export default Dashboard