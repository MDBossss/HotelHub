import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getOfferByID } from '../../utils/FetchJsonFile';


const Booking = () => {

    const {id} = useParams();

    useEffect(() => {
        if(id !== undefined){
            getOfferByID(parseInt(id))
            .then(offer => {
                console.log(offer)
            })
        }
        
    },[id])

  return (
    <div className="booking">

    </div>
  )
}

export default Booking