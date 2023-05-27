import { useState } from 'react'
import {AiFillStar,AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {IoBedOutline} from "react-icons/io5";
import {IoMdResize} from "react-icons/io";
import {BsPerson} from "react-icons/bs";
import {OfferModel } from '../../types/model';
import { NavLink } from 'react-router-dom';

interface Props{
    offer: OfferModel;
}

const Offer = ({offer} :Props) => {

    const [favorited,setFavorited] = useState<boolean>(false);

    const handleFavorite = () => {
        setFavorited(!favorited);
    }

  return (
    <div className="offer">
        <div className="top">
            <NavLink to={`/deals/${offer.id}`}><img src={offer.images[0]} alt="main"/></NavLink>
            <div className="rating">
                <AiFillStar className='icon'/>
                <p>{offer.rating}</p>
            </div>
            <div className="favourite" onClick={handleFavorite}>
                {favorited ? <AiFillHeart className='icon'/> : <AiOutlineHeart className='icon'/>}
            </div>
        </div>
        <div className="bottom">
            <div className="basic-info">
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <h4>{new Date(offer.dateStart).toLocaleDateString("en-US",{ day: 'numeric', month: 'long' })} - {new Date(offer.dateEnd).toLocaleDateString("en-US",{ day: 'numeric', month: 'long' })}</h4>
            </div>
            <div className="price">
                <h3>${offer.price} <span>/{offer.duration} night</span></h3>
            </div>
            <div className="details">
                <div className="item">
                    <IoBedOutline className='icon'/>
                    <p>{offer.beds} Beds</p>
                </div>
                <div className="item">
                    <BsPerson className='icon'/>
                    <p>{offer.people} People</p>
                </div>
                <div className="item">
                    <IoMdResize className='icon'/>
                    <p>{offer.size} m<sup>2</sup></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer