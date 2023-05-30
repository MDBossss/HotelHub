import axios from "axios";
import { RecentModel } from "../types/model";

export async function fetchRecents(){
    const {data} = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/recents`);
    return data as RecentModel[];
}