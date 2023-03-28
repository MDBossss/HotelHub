import { ReviewModel } from '../../types/model';

interface Props{
    review: ReviewModel
}

const Review = ({review}:Props) => {
  return (
    <div className="review">
        <div className="top">
            <img src={review.userImage} alt="user" />
        </div>
        <div className="bottom">
            <p>{review.text}</p>
            <p>{review.publishedBy}, <span>{review.userProfession}</span></p>
        </div>
    </div>
  )
}

export default Review