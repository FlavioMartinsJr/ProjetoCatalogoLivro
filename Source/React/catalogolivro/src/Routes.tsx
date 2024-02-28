import { RequireAuth } from './hooks/Auth/RequireAuth';
import { Routes, Route, BrowserRouter } from "react-router-dom";


import { Home } from './pages/Home';
import { Livro } from './pages/Livro';

export function AppRoutes(){
  return(
      <BrowserRouter>
        <Routes>
          
          <Route path="/*" element={<Home/>}/>
          <Route path="/Livro" element={<Livro/>} />

        </Routes>
      </BrowserRouter>
  );
}
