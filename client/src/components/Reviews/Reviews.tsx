import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ReviewModel } from '../../types/model'
import Review from '../Review/Review'
import {motion,AnimatePresence} from "framer-motion";
import {wrap} from "popmotion";


    const review:ReviewModel = {
        publishedBy: "Kaarel Piho",
        text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        userImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userProfession: "Chiropodist"
    }


    const item = <>
        <Review review={review}/>
        <Review review={review}/>
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
    const [reviews,setReviews] = useState([item,item,item])
    const [[page,direction],setPage] = useState([0,0]);

    const imageIndex = wrap(0, reviews.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


  return (
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
                x: { type: "spring", stiffness: 300, damping: 30 },
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
            
            <div className="more more-left" onClick={() => paginate(-1)}>
                <BsChevronLeft/>
            </div>
            <div className="more more-right" onClick={() => paginate(1)}>
                <BsChevronRight/>
            </div>
            
        </motion.div>
    </AnimatePresence>
  )
}

export default Reviews