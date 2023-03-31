import { useState } from 'react'
import {AiFillStar,AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {IoBedOutline} from "react-icons/io5";
import {IoMdResize} from "react-icons/io";
import {BsPerson} from "react-icons/bs";
import { SpecialOfferModel } from '../../types/model';

interface Props{
    specialOffer: SpecialOfferModel;
}

const SpecialOffer = ({specialOffer} :Props) => {

    const [favorited,setFavorited] = useState<boolean>(false);

    const handleFavorite = () => {
        setFavorited(!favorited);
    }

  return (
    <div className="offer">
        <div className="top">
            <img src={specialOffer.image} alt="main" />
            <div className="rating">
                <AiFillStar className='icon'/>
                <p>{specialOffer.rating}</p>
            </div>
            <div className="favourite" onClick={handleFavorite}>
                {favorited ? <AiFillHeart className='icon'/> : <AiOutlineHeart className='icon'/>}
            </div>
        </div>
        <div className="bottom">
            <div className="basic-info">
                <h3>{specialOffer.name}</h3>
                <p>{specialOffer.description}</p>
                <h4>{specialOffer.dateStart} - {specialOffer.dateEnd}</h4>
            </div>
            <div className="price">
                <h3>${specialOffer.price} <span>/{specialOffer.duration} night</span></h3>
            </div>
            <div className="details">
                <div className="item">
                    <IoBedOutline className='icon'/>
                    <p>{specialOffer.beds} Beds</p>
                </div>
                <div className="item">
                    <BsPerson className='icon'/>
                    <p>{specialOffer.people} People</p>
                </div>
                <div className="item">
                    <IoMdResize className='icon'/>
                    <p>{specialOffer.size} m<sup>2</sup></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer