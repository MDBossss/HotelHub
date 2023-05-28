import React, {useState,useEffect} from 'react'
import { ReviewModel } from '../../types/model';
import BlogReview from '../../components/BlogReview/BlogReview';
import Footer from '../../components/Footer/Footer';

const Blog = () => {

  const [reviewData,setReviewData] = useState<ReviewModel[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE_URL + "/api/reviews")
    .then(response => response.json())
    .then(data => setReviewData(data))
  },[])

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