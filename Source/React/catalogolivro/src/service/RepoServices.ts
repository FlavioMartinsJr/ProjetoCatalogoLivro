import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_EBOOK
});

let order = "&orderBy=relevance";
let projeto = "&projection=full";
let type = "&printType=all";
let typeBook = "&filter=ebooks";
let resultados = "&maxResults=40";

export const useApi = () => ({
    GetLivros: async () => {
        const response = await api.get("aartededizer"+order+projeto+type+typeBook+resultados)
        return response.data;
    },

    GetLivrosById: async (id : number) => {
        const response = await api.get(`${id}`+order+projeto+type+typeBook+resultados)
        return response.data;
    }
});