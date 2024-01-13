import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_TOKEN,
  },
});
