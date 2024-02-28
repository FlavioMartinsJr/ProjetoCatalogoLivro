import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_EBOOK
});

export const useApi = () => ({
    GetBooks: async (url : string) => {
        const response = await api.get(url)
        console.log(response.data)
        return response.data;
    },
    signin: async (username: string, password: string) => {
        var fomulario = new FormData()
        fomulario.append("username",username);
        fomulario.append("password",password);

        const response = await api.post('/Auth/LoginProfessor',fomulario, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    logout: async () => {
        return { status: true };
    }
});