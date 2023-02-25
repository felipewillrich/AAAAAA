import axios from "axios"
import { useCallback, useEffect, useState } from "react"

function Pessoas() {

    const [lista, setLista] = useState([])
  
  
    const listarPessoas = useCallback(() => {
      axios.get(`http://localhost:3333/pessoas`)
        .then(response => setLista(response.data))
    }, [])
  
  
    useEffect(() => {
      listarPessoas()
    })
  return (
    <div>
        <h1>Pessoas</h1>
        <div>
        <div className='col'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {lista.map(pessoa => (
                <tr key={pessoa.id}>
                  <td>{pessoa.id}</td>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Pessoas