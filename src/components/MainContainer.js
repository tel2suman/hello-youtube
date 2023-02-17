import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <React.Fragment>
        <div className='col-span-11'>
        <ButtonsList/>
        <VideoContainer/>
        </div>
    </React.Fragment>
  )
}

export default MainContainer
