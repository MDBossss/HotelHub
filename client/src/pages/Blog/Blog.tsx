import { useState } from "react";
import { ReviewModel } from "../../types/model";
import BlogReview from "../../components/BlogReview/BlogReview";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../utils/fetchReviews";

const Blog = () => {
	const [reviewData, setReviewData] = useState<ReviewModel[]>([]);

	useQuery({
		queryKey: ["reviews"],
		queryFn: fetchReviews,
		onSuccess: setReviewData,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<div className="blog-wrapper container">
				<h1>Blog</h1>
				{reviewData?.map((review, index) => (
					<BlogReview key={index} review={review} />
				))}
			</div>
		</>
	);
};

export default Blog;
