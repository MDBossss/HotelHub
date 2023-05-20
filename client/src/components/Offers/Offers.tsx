import React, {useEffect, useState} from 'react'
import { OfferModel,Filters } from '../../types/model'
import Offer from '../Offer/Offer';

interface Props{
  filters:Filters
}

const Offers = ({filters}:Props) => {

    const [offers,setOffers] = useState<OfferModel[]>([]);
    const [filteredOffers,setFilteredOffers] = useState<OfferModel[]>([]);

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