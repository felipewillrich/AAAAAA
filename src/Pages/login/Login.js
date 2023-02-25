import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image  from "./Login.png";
import * as Yup from "yup";
import InputLabel from "../../Componentes/unform/input-label"
import { useAuth } from '../../contexto/AuthContext'
import  Logo  from "../login/Logo.png"

function Login() {

  const { Login } = useAuth()

  const formRef = useRef(null)

  const navigate = useNavigate()

  const fazerLogin = async (user) => {
    await Login(user)
  }

  const submit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({})

        const schema = Yup.object().shape({
          username: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
          password: Yup.string().required('Senha é obrigatório'),
        })

        await schema.validate(data, { abortEarly: false })

        fazerLogin(data)
      } catch (erro) {
        if (erro instanceof Yup.ValidationError) {
          const errorMessages = {}

          erro.inner.forEach((error) => {
            if (error.path) errorMessages[error.path] = error.message
          })

          formRef.current?.setErrors(errorMessages)
        }
      }
    },
    [navigate]
  )
    return (
        <LContainer className="container">
           
           <div className="row">
        <div className="col-sm col-md-3 card">
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <Form ref={formRef} onSubmit={submit} noValidate >
            <div className="mt-5">
              <InputLabel  name="username" label="Usuário" />
            </div>

            <div className="mt-3">
              <InputLabel name="password" label="Senha" type="password"/>
            </div>

            <Link className="link" to="/Home">Esqueceu sua senha?</Link>
            <button
              className="btn btn-secondary btn-block  mt-5" type="submit">
              Entrar
            </button>
          </Form>
        </div>
      </div>
        </LContainer>
        
    )
}
export default Login
export const LContainer = styled.div`
background-image: url(${Image});
background-repeat: no-repeat;
width: 100%;
height: 900px;
background-size: contain;
background-position: center;
background-color: #111111;
color: #fff;

img {
  max-width: 200px;
  
}
.card {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background: #5C5C5C;
    padding: 30px;
    margin-top: 10px;
  
  button {
    background: #FF720C;
    height: 25px;
    width: 100%;
}
.link{
    font-size: 10px;
    margin-top: 0;
    color: #fff;
}

`
