import React, {useEffect, useState} from 'react'
import { OfferModel } from '../../types/model'
import Offer from '../Offer/Offer';

const Offers = () => {

    const [offers,setOffers] = useState<OfferModel[]>([]);

    useEffect(() => {
      fetch("/offers.json")
      .then(response => response.json())
      .then(data => setOffers(data))
    },[])

  return (
    <div className="offers">
        {offers?.map((offer,index) => (
          <Offer key={index} offer={offer}/>
        ))}
    </div>
  )
}

export default Offers