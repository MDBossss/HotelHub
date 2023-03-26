import React, { useState } from 'react'
import {AiFillStar,AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {IoBedOutline,IoMdResize} from "react-icons/io5";
import {BsPerson} from "react-icons/bs";


const SpecialOffer = ({specialOffer}) => {

    const [favorited,setFavorited] = useState(false);

  return (
    <div className="special-offer">
        <div className="top">
            <div className="image">
                <img src={specialOffer.image} alt="main" />
                <div className="rating">
                    <AiFillStar/>
                    <p>{specialOffer.rating}</p>
                </div>
                <div className="favourite" onClick={handleFavorite}>
                    {favorited ? <AiFillHeart/> : <AiOutlineHeart/>}
                </div>
            </div>
            <h3>{specialOffer.name}</h3>
            <p>{specialOffer.description}</p>
            <h4>{specialOffer.date}</h4>
        </div>
        <div className="bottom">
            <div className="price">
                <h3>{specialOffer.price} /{specialOffer.duration} night</h3>
            </div>
            <div className="details">
                <div className="item">
                    <IoBedOutline/>
                    <p>{specialOffer.beds} Beds</p>
                </div>
                <div className="item">
                    <BsPerson/>
                    <p>{specialOffer.people} People</p>
                </div>
                <div className="item">
                    <IoMdResize/>
                    <p>{specialOffer.size} m^2</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer