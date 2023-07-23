import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWVlM2EwYzE2ODU5ZTUyMWQ3NjBhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTUwNjI5MCwiZXhwIjoxNjg5NzY1NDkwfQ.1Tfj5lub3tc5aTDaDQFdeZRdAQlJbKbVAmy0tu0XEBA";


export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
});
