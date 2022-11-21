import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../../Header/Header'

const Unfavourite = () => {
    const favouriteData= useSelector(state=>state.favourite)
    const uploadData=useSelector(state=>state.upload)
    console.log('favouriteData', favouriteData)
    console.log('uploadData', uploadData)
        

  return (
    <div>
        <Navigation/>
        
    </div>
  )
}

export default Unfavourite