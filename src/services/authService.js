/* eslint-disable no-undef */
import axios from "axios";

export async function signup(data){
    return await axios.post(process.env.REACT_APP_API_URI + "/sign-up", data)
}

export async function signin(data){
    return await axios.post(process.env.REACT_APP_API_URI + "/sign-in", data)
}