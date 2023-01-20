import axios from "axios"

export const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `1216c8993f944e4582a1d738bd249292`,
  },
})

export const realApi = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
