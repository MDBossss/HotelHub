import Review from "../components/Review/Review";
import { ReviewModel } from "../types/model";

export function GroupReviews(reviews:ReviewModel[]){
    const reviewGroup = [];

    for (let i = 0; i < reviews.length; i += 3) {
    const group = reviews.slice(i, i + 3);
    const groupDiv = (
        <div key={i}>
        {group.map(review => (
            <Review review={review} />
        ))}
        </div>
    );
    reviewGroup.push(groupDiv);
    }
    return reviewGroup;
}