/* eslint-disable no-undef */
import axios from "axios";

export function getAllPodcasts(config){
return axios.get(process.env.REACT_APP_API_URI+ '/podcasts', config)
}