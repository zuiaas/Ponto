import api from './axios.js';

export async function listarUsuarios() {
    const response = await api.get("/usuarios");
    return response.data;
}