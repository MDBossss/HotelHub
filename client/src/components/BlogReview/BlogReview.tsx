import { ReviewModel } from '../../types/model'

interface Props{
    review: ReviewModel
}

const BlogReview = ({review}:Props) => {
  return (
    <div className="blog-review">
        <div className="left">
            <div className="profile-image">
                <img src={review.userImage} alt="user" />
            </div>
            <p className='name'>{review.publishedBy}</p>
            <p className='profession'>{review.userProfession}</p>
        </div>
        <div className="right">
            <p>{review.text}</p>
        </div>
    </div>
  )
}

export default BlogReview