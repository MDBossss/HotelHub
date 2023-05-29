import React, {useState,useEffect} from 'react'
import { ReviewModel } from '../../types/model';
import BlogReview from '../../components/BlogReview/BlogReview';
import Footer from '../../components/Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchReviews } from '../../utils/fetchReviews';

const Blog = () => {

  const [reviewData,setReviewData] = useState<ReviewModel[]>([]);

  useQuery({
    queryKey: ["reviews"],
    queryFn:fetchReviews,
    onSuccess: setReviewData
  })


  return (
    <>
      <div className="blog-wrapper container">
        <h1>Blog</h1>
        {reviewData?.map((review,index) => (
          <BlogReview key={index} review={review}/>
        ))}
      </div>
      <Footer 
        section1={<h3>Don't forget to use our free promo code <br/> at the checkout! </h3>}
        section2={<></>}
        section3={<></>}
      />  
    </>
  )
}

export default Blog