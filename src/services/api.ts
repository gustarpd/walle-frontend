import axios from "axios";

const token = localStorage.getItem("ng:usertoken");

export const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers:  { Authorization: `Bearer ${token}` }
})
