/* eslint-disable no-undef */
import axios from "axios";

export function getAllPodcasts(config) {
  return axios.get(process.env.REACT_APP_API_URI + "/podcasts", config);
}

export function getOnePodcast(id, config) {
  return axios.get(`${process.env.REACT_APP_API_URI}/podcasts/${id}`, config);
}

export function getFavoritePodcast(config) {
    return axios.get(`${process.env.REACT_APP_API_URI}/podcasts/favorites`, config);
  }
