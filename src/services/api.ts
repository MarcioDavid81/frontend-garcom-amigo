import axios from "axios";

export const api = axios.create({
    baseURL: "https://garcom-amigo-02cbe20b86fe.herokuapp.com",
});
