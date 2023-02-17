import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <React.Fragment>
        <div className='grid grid-flow-col'>
            <Sidebar/>
            <Outlet/>
        </div>
    </React.Fragment>
  )
}

export default Body
