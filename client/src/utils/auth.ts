import axios from "axios";


export async function loginWithPassword(email:string, password:string) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
      email,
      password,
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling code
  }
}
