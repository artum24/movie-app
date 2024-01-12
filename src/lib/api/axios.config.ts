import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjlmOTM1ZGM4YzYzMTJiMWE5MjBhZmY0YzllNzgwYyIsInN1YiI6IjVlYmJkM2VhNjE0YzZkMDAxZDhmOTRjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TSHSWmTiDLOlG2KD9CLciwYzV_-ZgTv2S6D_a6x-MEc",
  },
});
