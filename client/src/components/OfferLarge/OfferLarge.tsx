import { useState,forwardRef } from 'react'
import {AiFillStar,AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {IoBedOutline} from "react-icons/io5";
import {IoMdResize} from "react-icons/io";
import {BsPerson} from "react-icons/bs";
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {OfferModel } from '../../types/model';
import { NavLink } from 'react-router-dom';

interface Props{
    offer: OfferModel,
    offerRef: React.MutableRefObject<HTMLDivElement | null> | null,
    mapRef: React.MutableRefObject<google.maps.Map | undefined>,
    setSelectedOfferID: (id:number) => void
}

const OfferLarge = forwardRef(({offer,offerRef,mapRef,setSelectedOfferID} :Props) => {

    const [favorited,setFavorited] = useState<boolean>(false);

    const handleFavorite = () => {
        setFavorited(!favorited);
    }

    const handleLocateOffer = () => {
      if(mapRef.current){
        setSelectedOfferID(offer.id)
        mapRef.current.panTo({lat:offer.lat,lng:offer.lng});
    }
    }

  return (
    <div className="offer-large" ref={offerRef}>
        <div className="top">
          <div className="left">
          <NavLink to={`/deals/${offer.id}`}><img src={offer.images[0]} alt="main" /></NavLink>    
          </div>
          <div className="right">
            <div className="image">
            <NavLink to={`/deals/${offer.id}`}><img src={offer.images[1]} alt="main1" /></NavLink>
            </div>
            <div className="image">
            <NavLink to={`/deals/${offer.id}`}><img src={offer.images[2]} alt="main2" /></NavLink>
            </div>   
          </div>  
        </div>
        <div className="bottom">
            <div className="basic-info">
              <div className="name">
                <h3>{offer.name}</h3>
                <div className="rating">
                  <AiFillStar className='icon'/>
                  <p>{offer.rating}</p>
               </div>
              </div>
                <p>{offer.description}</p>
                <h4>{new Date(offer.dateStart).toLocaleDateString("en-US",{ day: 'numeric', month: 'long' })} - {new Date(offer.dateEnd).toLocaleDateString("en-US",{ day: 'numeric', month: 'long' })}</h4>
            </div>
            <div className="price">
                <div className="favourite" onClick={handleFavorite}>
                    {favorited ? <AiFillHeart className='icon'/> : <AiOutlineHeart className='icon'/>}
                </div>
                <h3>${offer.price} <span>/{offer.duration} night</span></h3>
            </div>
            <div className="details">
              <div className="items">
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
              <div className="locate" onClick={handleLocateOffer}>
                <HiOutlineLocationMarker/>
              </div>
            </div>
        </div>
    </div>
  )
})

export default OfferLarge