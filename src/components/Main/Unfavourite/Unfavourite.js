import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFavouriteData } from '../../../store/action/favouriteAction'

const Unfavourite = () => {
    const favouriteData= useSelector(state=>state.favourite)
    const uploadData=useSelector(state=>state.upload)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getAllFavouriteData())
    }, [favouriteData.length])
    
  return (
    <div>

    </div>
  )
}

export default Unfavourite