import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdtlghynuqxsnhryfsre.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchOffers = async () => {
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