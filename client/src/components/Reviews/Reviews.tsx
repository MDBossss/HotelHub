import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ReviewModel } from '../../types/model'
import Review from '../Review/Review'
import {motion,AnimatePresence} from "framer-motion";
import {wrap} from "popmotion";
import { GroupReviews } from '../../utils/GroupReviews';


    const review:ReviewModel = {
        publishedBy: "Kaarel Piho",
        text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        userImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userProfession: "Chiropodist"
    }


    const itemBigScreen = <>
        <Review review={review}/>
        <Review review={review}/>
        <Review review={review}/>
    </>

    const itemSmallScreen = <>
            <Review review={review}/>
        </>

    const variants = {
        enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
        },
        center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        },
        exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };



const Reviews = () => {
    const [reviewData,setReviewData] = useState<ReviewModel[]>([review,review,review,review,review,review,review,review,review]); //raw data fetched from backend
    const [reviews,setReviews] = useState([itemSmallScreen,itemSmallScreen,itemSmallScreen]) //jsx which will be shown in the slider (1 or 3 elements)
    const [[page,direction],setPage] = useState([0,0]);



    const imageIndex = wrap(0, reviews.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    const updateReviews = (windowSize:number) => {
        return windowSize < 992 ? reviewData : GroupReviews(reviewData);
    }


  return (
    <>
    <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div 
            className="review-items"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{left:0,right:0}}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
    
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >{reviews[imageIndex]}
            
            
            
        </motion.div>
    </AnimatePresence>
    <div className="more more-left" onClick={() => paginate(-1)}>
        <BsChevronLeft/>
    </div>
    <div className="more more-right" onClick={() => paginate(1)}>
        <BsChevronRight/>
    </div>
    </>
  )
}

export default Reviews