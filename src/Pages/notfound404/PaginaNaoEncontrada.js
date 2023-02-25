import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../notfound404/Erro.png";

function PaginaNaoEncontrada () {
    return(
        <NContainer className="container">
            <div className="row">
                <div className="col-sm col-md-2">
                    <Link to="/" className="btn btn-primary">voltar a pagina inicial</Link>
                </div>
            </div>
           
        </NContainer>

    )
}
export default PaginaNaoEncontrada

export const NContainer = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
    width: 100%;
    height: 700px;
    background-size: contain;
    background-position: center;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-primary {
    margin-left: 7rem;
    background: none !important;
    color: #FF720C;
    text-shadow: 2px 2px 5px #FF720C;
}

`