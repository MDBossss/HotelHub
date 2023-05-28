import React, {useEffect, useState} from 'react'
import Offer from '../../Offer/Offer'
import { OfferModel } from '../../../types/model';



const SpecialOfferSection = () => {

  const [offers,setOffers] = useState<OfferModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(import.meta.env.VITE_API_BASE_URL + "/api/offers")
      .then(response => response.json())
      .then(data => setOffers(data))
    }
    fetchData();
  },[])

  return (
    <div className="special-offer-wrapper container" id='Special Offers'>
    <div className="special-offer">
        <h1>Special offers</h1>
        <div className="items">
          {offers.length !== 0 ? <>
          <Offer offer={offers?.[0]}/>
          <Offer offer={offers?.[1]}/>
          <Offer offer={offers?.[2]}/> </>
          : null  
          }
            
        </div>
    </div>
</div>
  )
}

export default SpecialOfferSection