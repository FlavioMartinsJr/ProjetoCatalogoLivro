import axios from 'axios';
import { Livros } from '../Types/Livro';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_EBOOK
});

let order = "&orderBy=relevance";
let projeto = "&projection=full";
let type = "&printType=all";
let typeBook = "&filter=ebooks";
let resultados = "&maxResults=";

function fomartarData(data:any[]| []){
    const Data: Livros[] = []
    data.map((items) =>{
        let livro: Livros = {
            id: items.id ? items.id : "Sem indetificador",
            title: items.volumeInfo.title ? items.volumeInfo.title : "Sem Titulo",
            author: items.volumeInfo.authors ? items.volumeInfo.authors[0] : "Sem Atores",
            descrition: items.volumeInfo.description ? items.volumeInfo.description : "Sem Descrição do Livro",
            urlImg: items.volumeInfo.imageLinks.thumbnail,
            previewLink: items.volumeInfo.previewLink,
        }
        Data.push(livro)
    })
    return Data;
}

export const useApi = () => ({
    GetLivros: async () => {
        let response = await api.get("/volumes?q=cleancode"+order+projeto+type+typeBook+resultados+"40")
        let data = []
        for(let i = 0; i < response.data.items.length;i++ ){
            if(response.data.items[i].accessInfo.accessViewStatus !== "NONE")
            {
                data.push(response.data.items[i])
            }
        }
        return fomartarData(data);
    },
    GetLivrosByPesquisa: async (title : string | any) => {
        const response = await api.get(`/volumes?q=${title}`+order+projeto+type+typeBook+resultados+"40")
        let data = []
        for(let i = 0; i < response.data.items.length;i++ ){
            if(response.data.items[i].accessInfo.accessViewStatus !== "NONE")
            {
                data.push(response.data.items[i])
            }
        }
        return fomartarData(data);
    },
    
    GetLivrosByAuthor: async (author : string | any, title  : string | any) => {
        const response = await api.get(`/volumes?q=${author}`+order+projeto+type+typeBook+resultados+"5")
        let data = []
        for(let i = 0; i < response.data.items.length;i++ ){
            if(response.data.items[i].accessInfo.accessViewStatus !== "NONE" && response.data.items[i].volumeInfo.authors !== undefined && response.data.items[i].volumeInfo.title !== title)
            {
                data.push(response.data.items[i])
            }
        }
        return fomartarData(data);
    }
});