import { RequireAuth } from './hooks/Auth/RequireAuth';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import { Home } from './pages/Home';
import { Livro } from './pages/Livro';
import { Contato } from './pages/Contato';
import { Sobre } from './pages/Sobre';
import { Privacidade } from './pages/Privacidade';
import { Termos } from './pages/Termos';

export function AppRoutes(){
  return(
      <BrowserRouter>
        <Routes>
          
          <Route path="/*" element={<Home/>}/>
          <Route path="/Livro" element={<Livro/>} />
          <Route path="/Contato" element={<Contato/>} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Privacidade" element={<Privacidade/>} />
          <Route path="/TermosDeUso" element={<Termos/>} />

        </Routes>
      </BrowserRouter>
  );
}
