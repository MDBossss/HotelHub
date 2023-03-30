import React from "react";
import Review from "../components/Review/Review";
import { ReviewModel } from "../types/model";

export function groupReviews(reviews:ReviewModel[]){
    const reviewGroup = [];

    for (let i = 0; i < reviews.length; i += 3) {
    const group = reviews.slice(i, i + 3);
    const groupDiv = (
        <div key={i} className="review-items">
        {group.map((review,index) => (
            <React.Fragment key={index}>
                <Review review={review} />
            </React.Fragment>
        ))}
        </div>
    );
    reviewGroup.push(groupDiv);
    }
    return reviewGroup;
}


export function singleReviews(reviews:ReviewModel[]){
    const reviewGroup:JSX.Element[] = [];
    reviews.map((review,index) => {
        reviewGroup.push(<Review key={index} review={review}/>)
    })
    return reviewGroup;
}