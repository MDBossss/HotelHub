import axios from "axios";
import { User } from "../types/model";

/**
 * Function that logins the user with the given email and password via endpoint that is linked to Supabase auth
 * @param email 
 * @param password 
 * @returns userID if the login was successfull
 */
export async function loginWithPassword(email:string, password:string) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
      email,
      password,
    });

    const userID = response.data.user.id;
    return userID;
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling code
  }
}

/**
 * Function that registers the user with the given data via endpoint that is linked to Supabase auth
 * @param email 
 * @param password 
 * @param fullName 
 * @param phoneNumber 
 * @returns userID if the login was successfull
 */
export async function signUpWithPassword(email:string,password:string,fullName:string,phoneNumber:string){
  try{
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`,{
      email,password,fullName,phoneNumber
    });

    const userID = response.data.data.user.id;
    return userID
  }catch(error){
    throw error;
  }
}

export async function addUser(user:User){
  try{
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/add`,{
      user
    });
  }catch(error){
    throw error;
  }
}

export async function fetchUserByID(id:string):Promise<User | null>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}`);
    return data as User;
}