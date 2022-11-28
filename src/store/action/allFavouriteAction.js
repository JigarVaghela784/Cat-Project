import axios from "axios";
import * as actionType from "./actionType";

export const fetchFavouriteImageStart=()=>{
    return{
        type:actionType.FETCH_FAVOURITE_IMAGE_START,
    }
}

export const fetchFavouriteImageSuccess=(data)=>{
    return{
        type:actionType.FETCH_FAVOURITE_IMAGE_SUCCESS,
        data,
    }
}

export const fetchFavouriteImageFail=(error)=>{
    return{
        type:actionType.FETCH_FAVOURITE_IMAGE_SUCCESS,
        error,
    }
}

export const fetchFavouriteImage=()=>{
    return async dispatch=>{
        dispatch(fetchFavouriteImageStart())
        try{
            axios.defaults.headers.common["x-api-key"] =
            "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
            const res=await axios.get('https://api.thecatapi.com/v1/favourites?order=DESC')
            // console.log('res', res)
            const mapped=res.data.map(favourite=>{
                return{
                    id:favourite.image.id,
                    url:favourite.image.url,
                    favourite,
                }
            })
            
            dispatch(fetchFavouriteImageSuccess(mapped))
        }catch(error){
            console.log('error', error)
           
            dispatch(fetchFavouriteImageFail(error))
        }
    }
}