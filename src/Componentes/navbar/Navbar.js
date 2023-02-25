
import styled from "styled-components"
import IconeDeUsuarioNavbar from "../../icones/IconeDeUsuarioNavbar.png"


function Navbar(){
    return(
    <header>
        <nav className="navbar">
            <Container className="container">
                <div className="row">
                    <div className="col-sm col-md-6 ">
                        <div className="navbar-brand" href="/Login">
                        <p className="h1">CLOTHING
                        </p>
                        <img src={IconeDeUsuarioNavbar} alt="logo"/>
                    </div>
                </div>
                    </div>
                
            </Container>
        </nav>
    </header>
    )
}
export default Navbar

export const Container = styled.div`
margin-top: 0;
max-width: 100%;
background-color: #5C5C5C;
display: flex;
justify-content: center;
    img{
        max-width: 100px;
        margin-left: 35rem;
        position: absolute;
        margin-top: -6rem;
        
}
.h1{
    font-size: 55px;
    color:  #ffff; 
    justify-content: end;
    margin-top: 3rem;
    margin-bottom: 2rem;
    
}

`