import React from 'react'
import Button from './Button'

const ButtonNames = [ 'All', 'Gaming', 'Songs', 'Live', 'Soccer', 'Cricket', 'Cooking', 'Valentines']

const ButtonsList = () => {
  return (
    <React.Fragment>
        <div className='flex'>
          {ButtonNames.map((name, index) => {
          return <Button key={index} name={name}/>
        })}
        </div>
        
    </React.Fragment>
  )
}

export default ButtonsList;
