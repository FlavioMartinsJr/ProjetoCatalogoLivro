import axios from 'axios';

const api = axios.create({
    baseURL: "process.env.REACT_APP_API"
});

export const useApi = () => ({
    validateToken: async (token: string,exp: string) => {
        const data = new Date()
        var dataAtual = data.toISOString()
        if(dataAtual > exp ){
            return false
        }
        var fomulario = new FormData()
        fomulario.append("username",token);
        fomulario.append("password",exp);
        const response = await api.post('/Validate/ValidaProfessor',fomulario, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
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