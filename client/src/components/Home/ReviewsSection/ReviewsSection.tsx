import React from 'react'
import Reviews from '../../Reviews/Reviews'
import { NavLink } from 'react-router-dom'

const ReviewsSection = () => {
  return (
    <div className="reviews-wrapper container" id='Reviews'>
    <div className="reviews">
        <h1>Reviews</h1>
        <div className="test-wrapper">
            <Reviews/>
        </div>
        <div className="swipe-wrapper">
            <span>Swipe for more...</span>
            <NavLink to={"/blog"}><button>More reviews</button></NavLink>
        </div>

    </div>
</div>
  )
}

export default ReviewsSection