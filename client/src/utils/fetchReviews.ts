import axios from "axios";
import { ReviewModel } from "../types/model";

export async function fetchReviews(){
    const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews`);
    return data as ReviewModel;
}