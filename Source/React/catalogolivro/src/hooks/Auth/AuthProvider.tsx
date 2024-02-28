import { useEffect, useState } from "react";
import { useApi } from "../../service/RepoServices";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<string | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageToken = localStorage.getItem('authToken');
            const storageData = localStorage.getItem('exp');
            if (storageToken && storageData) {
                const data = await api.validateToken(storageToken,storageData);
                if(data === false){
                    console.log("signout está sendo executada.");
                    setUser(null);
                    setToken('');
                    setExp('');
                    await api.logout();
                }
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.access_token) {
            setUser(data.name);
            setExp(data.exp);
            setToken(data.access_token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        setExp('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }
    const setExp = (exp: string) => {
        localStorage.setItem('exp', exp);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}