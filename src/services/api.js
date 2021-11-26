import axios from "axios";

export const api = axios.create({
  baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes",
});
