import React from 'react'
import { OfferModel } from '../../types/model'
import { BsPerson } from 'react-icons/bs'
import { IoMdResize } from 'react-icons/io'
import { IoBedOutline } from 'react-icons/io5'

interface Props{
    onNext: () => void,
    offer: OfferModel | undefined
}

const ReservationInfo = ({onNext,offer}:Props) => {
  return (
    <div className="reservation-info">
        <h1>Reservation Info</h1>
        <div className="offer-info">
            <div className="left">
                <img src={offer?.images[0]} alt="" />
            </div>
            <div className="right">
                <h2>{offer?.name}</h2>
                <div className="general">
                    <div className="item">
                        <IoBedOutline className='icon'/>
                        <p>{offer?.beds} Beds</p>
                    </div>
                    <div className="item">
                        <BsPerson className='icon'/>
                        <p>{offer?.people} People</p>
                    </div>
                    <div className="item">
                        <IoMdResize className='icon'/>
                        <p>{offer?.size} m<sup>2</sup></p>
                    </div>
                </div>
                <div className="labels">
                    <div className="left">
                        
                    </div>
                </div>
            </div>
        </div>
        <button onClick={onNext}>Next Step</button>
    </div>
  )
}

export default ReservationInfo