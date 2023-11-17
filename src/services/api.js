import axios from "axios"

export const api = axios.create({
  baseURL: "https://weatherapp-backend-qpnm.onrender.com"
})