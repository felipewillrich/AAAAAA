import React from 'react';
import styled from "styled-components"
import PedidosIcone from "../../icones/PedidosIcone.png"
import PessoasIcone from "../../icones/PessoasIcone.png"
import ProdutosIcone from "../../icones/ProdutoIcone.png"
import UnidadesIcone from "../../icones/UnidadesIcone.png"
import UsuariosIcone from "../../icones/UsuariosIcone.png"
import { Link } from "react-router-dom"

function Home() {
    return(
        <Container className="container">
            <div className="row justify-content-center">
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/pedidos" className="card-body">
                        <img src={PedidosIcone} className="card-img-top" alt="Pedidos Icone"/>
                            <h5 className="card-title">PEDIDOS</h5>
                        </Link>
                    </div>
                </div>
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/pessoas" className="card-body">
                        <img src={PessoasIcone} className="card-img-top" alt="Pessoas Icone"/>
                            <h5 className="card-title">PESSOAS</h5>
                        </Link>
                    </div>
                </div>
                    <div className="col-sm col-md-4">
                        <div className="card">
                        <Link to="/produtos" className="card-body">
                        <img src={ProdutosIcone} className="card-img-top" alt="Produtos Icone"/>
                            <h5 className="card-title">PRODUTOS</h5>
                        </Link>
                    </div>
                </div>
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/unidades" className="card-body">
                        <img src={UnidadesIcone} className="card-img-top" alt="Unidades Icone"/>
                            <h5 className="card-title">UNIDADES</h5>
                        </Link>
                    </div>
                </div>
                    <div className="col-sm col-md-4">
                        <div className="card">
                        <Link to="/usuarios" className="card-body">
                        <img src={UsuariosIcone} className="card-img-top" alt="Usuarios Icone"/>
                            <h5 className="card-title">USUÁRIOS</h5>
                        </Link>
                    </div>
                 </div>
            </div>
        </Container>
    
    )
}
export default Home
export const Container = styled.div`
flex-direction: row;
flex-wrap: wrap;
.card{
    max-width: 190px;
    align-content: center;
    align-items: center;
    
    :hover{
        background-color: #FF720C;
        a{
            color: #fff;
        }
    }
}
img{
    max-width: 100px;
}

`

