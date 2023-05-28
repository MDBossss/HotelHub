import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();
const supabaseUrl = "https://gdtlghynuqxsnhryfsre.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Fetches all offers from supabase
 * @returns Offers array
 */
export const fetchOffers = async () => {
  const { data, error } = await supabase.from("offers").select("*");

  if (error) {
    throw new Error("Error fetching offers");
  }

  const result = data.map((item) => {
    const obj = {};
    const images = [];
    for (const key in item) {
      if (key.startsWith("images/")) {
        images.push(item[key]);
      } else {
        obj[key] = item[key];
      }
    }
    obj.images = images;
    return obj;
  });

  return result;
};

/**
 * Fetches offers with given ID from supabase
 * @param {*} offerID Offer ID
 * @returns Offer with given ID
 */
export const fetchOfferByID = async (offerID) => {
  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .eq("id", offerID);

  if (error) {
    throw new Error("Error fetching offer");
  }

  if (data.length === 0) {
    throw new Error("Offer not found");
  }

  const item = data[0];
  const obj = {};
  const images = [];

  for (const key in item) {
    if (key.startsWith("images/")) {
      images.push(item[key]);
    } else {
      obj[key] = item[key];
    }
  }

  obj.images = images;
  return obj;
};

/**
 * Fetches all reviews from supabase
 * @returns JSON reviews data
 */
export const fetchReviews = async () => {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    throw new Error("Error fetching table data");
  }

  return data;
};
