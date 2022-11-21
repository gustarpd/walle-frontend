import axios from "axios";

const token = localStorage.getItem("ng:token");

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers:  { Authorization: `Bearer ${token}` }
})
