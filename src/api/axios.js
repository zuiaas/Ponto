import axios from "axios";

const api = axios.create({
    baseURL: "https://ponto.vstec.net"
});

export default api;