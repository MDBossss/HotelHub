import { OfferModel } from '../../types/model'
import Offer from '../Offer/Offer';

interface Props{
  offers: OfferModel[]
}

const Offers = ({offers}:Props) => {

  return (
    <div className="offers">
        {offers?.map((offer,index) => (
          <Offer key={index} offer={offer}/>
        ))}
    </div>
  )
}

export default Offers