import axios, { Axios } from "axios";

const API: Axios = axios.create({
  baseURL: "https://film-guess.herokuapp.com/",
});

export function fetchMovie() {
  try {
    return API.get("/movies");
  } catch (error) {
    return console.log(error);
  }
}
