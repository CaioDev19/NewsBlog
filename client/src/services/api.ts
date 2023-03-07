import axios from "axios"

export const api = axios.create({
  baseURL: "https://newsblog-production.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
