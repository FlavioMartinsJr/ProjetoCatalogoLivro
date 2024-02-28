import { useEffect, useState } from "react";
import  useSWR  from "swr";
import { useApi } from "../../service/RepoServices";

const api = useApi();

export const Books = () => ({
   

    listarLivros: async () => {
        const{data, error, isLoading} = useSWR("/volumes?q=turmadamonica&orderBy=relevance&projection=full&printType=all&filter=ebooks&maxResults=40",api.GetBooks);
        if(error){
            return [error,isLoading]
        }
        return [data, isLoading]
    },
});
