import axios from "axios"

export const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `30d7bc34ce1a45fa8010b77ba063290b`,
  },
})
