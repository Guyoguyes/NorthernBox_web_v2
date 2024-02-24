import axios from "axios";

const instance = axios.create({
    baseURL : "https://nbeventsapi.herokuapp.com"
});

export  default instance;