import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home"
import Produtos from "./Pages/produtos/Produtos.js";
import PaginaNaoEncontrada from "./Pages/notfound404/PaginaNaoEncontrada"
import Pessoas from "./Pages/pessoas/Pessoas"
import Produto from "./Pages/produtos/form/Produto"

export function RotasPrivadas () {
    
    return(
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Pessoas" element={<Pessoas />} />
            <Route path="/Produtos" element={<Produtos  />} />
            <Route path="/Produtos/novo" element={<Produto />}/>
            <Route path="/Produtos/:id" element={<Produto />}/>
            <Route path="/*" element={<PaginaNaoEncontrada />} />
        </Routes>
    );
}
export default RotasPrivadas