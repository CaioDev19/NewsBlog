import axios from "axios"

//https://newsblog-production.up.railway.app
export const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
