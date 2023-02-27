import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


const Pessoas = () => {
  const [usuarios, setPessoas] = useState([])
  const listarPessoas = () => {
    axios.get("http://localhost:3333/usuarios")
    .then(response => {
      setPessoas(response.data)
    })
    .catch(erro => {
      toast.error('nenhum usuario encontrado')
    })
  }
  useEffect(() => {
    listarPessoas()
  },[])
  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm col-md-6">
          <h1>Pessoas</h1>
        </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">username</th>
                  <th scope="col">password</th>
                </tr>
              </thead>
                <tbody class="table-group-divider">{usuarios.map(item =>(
                  <tr key={item.id}>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                  </tr>))}
                  
                </tbody>
            </table>
          </div>
      </div>
      
    </div>
  )
}
export default Pessoas