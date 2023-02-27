import { BrowserRouter }  from "react-router-dom";
import  Navbar  from "./Componentes/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from "./Rotas";
import Footer from './Componentes/footer/Footer';
import AuthProvider from "./contexto/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Footer/>
        <Rotas />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


