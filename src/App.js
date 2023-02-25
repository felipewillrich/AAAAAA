import { BrowserRouter }  from "react-router-dom";
import  Navbar  from "./Componentes/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from "./Rotas";
import AuthContext from './contexto/AuthContext'




const App = () => {
  return (
    <AuthContext>
    <BrowserRouter>
        <ToastContainer />
          
        <Navbar />
        <Rotas />
        
    </BrowserRouter>
    </AuthContext>
  );
}

export default App;


