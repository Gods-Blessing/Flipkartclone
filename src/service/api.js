import axios from 'axios';

const URL = "https://flipkart-server-yfmn.onrender.com";

export const AuthenticateSignup = async(data)=>{
    console.log("data is here:",data);
    try{
         return await axios.post(`${URL}/signup`, data)
    }catch(error){
        console.log("error:", error)
    }
}

export const AuthenticateLogin = async(data)=>{
    console.log("data is here:",data);
    try{
         return await axios.post(`${URL}/login`, data)
    }catch(error){
        console.log("error while calling login api:", error)
    }
}