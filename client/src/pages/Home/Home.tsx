import React, { useState } from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import {MdOutlinePayments} from "react-icons/md";
import {TbListSearch} from "react-icons/tb";
import {BiSupport} from "react-icons/bi";
import {GiCat} from "react-icons/gi";
import {BsChevronLeft,BsChevronRight} from "react-icons/bs";
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
import { ReviewModel, SpecialOfferModel } from '../../types/model';
import Review from '../../components/Review/Review';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {

    const specialOffer:SpecialOfferModel = {
        name: "Wilderness Club at Big Ceddar",
        description: "2 Bedroom Combined Lodge",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 2016,
        rating: 4.8,
        dateStart: "28 October",
        dateEnd: "1 November",
        duration: 6,
        beds: 4,
        people: 8,
        size: 220
    };


  return (
    <div className="home">
        <div className="cover-wrapper container">
            <div className="cover ">
                <h1>Find an apartment <br/> for your vacation</h1>
                <p>We have several thousand apartments for every taste in every corner of the globe</p>
                <div className="search">
                    <div className="location">
                        <HiOutlineLocationMarker/>
                    </div>
                <input type="text" placeholder='Search Destination'/>
                <button className='search-button'><FiSearch/></button>
                </div>
            </div>
        </div>
        
        
        <div className="why">
            <div className="top">
                <h1>Why Choose Us</h1>
                <p>The main reason is because our competitors have disgusting sites, but we can't write that here, so the text here will be different.</p>
            </div>
            <div className="bottom">
                <div className="card">
                    <div className="icon">
                        <MdOutlinePayments/>
                    </div>
                    <h2>Payment methods</h2>
                    <p>We have a lot of them, from cryptocurrencies to barter for potatoes</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <TbListSearch/>
                    </div>
                    <h2>Simple search process</h2>
                    <p>We checked it out, even the kid did it, but it was my mom's friend's son</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <BiSupport/>
                    </div>
                    <h2>24/7 Support</h2>
                    <p>Is there something you don't understand? Feel free to call us. Phone number in the footer</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <GiCat/>
                    </div>
                    <h2>We are nice</h2>
                    <p>Fantasy is over, there will be something really convincing here</p>
                </div>
            </div>
        </div>



        <div className="special-offer-wrapper container">
            <div className="special-offer">
                <h1>Special offers</h1>
                <div className="items">
                    <SpecialOffer specialOffer={specialOffer}/>
                    <SpecialOffer specialOffer={specialOffer}/>
                    <SpecialOffer specialOffer={specialOffer}/>
                </div>
            </div>
        </div>


        <div className="reviews-wrapper container">
            <div className="reviews">
                <h1>Reviews</h1>
                <Reviews/>
                <button>More reviews</button>
            </div>
        </div>
    </div>
  )
}

export default Home