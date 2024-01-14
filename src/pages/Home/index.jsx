import { useRef, useState } from "react"
import {v4} from 'uuid'
import { AddButton, Container, Produto, TrashButton } from "./styles"

function Home() {
  const inputRef = useRef()
  const [produtos,setProdutos] = useState([])

  

  function clicado() {
    setProdutos([
      {
        id: v4(),
        nome:inputRef.current.value
      }, ...produtos])
      inputRef.current.value = ''
  }
  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef}/>
      <AddButton onClick={clicado}>Adicionar</AddButton>

      {
        produtos.map(produto=>(
          <Produto key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton onClick={()=>deletarProduto(produto.id)}>🗑️</TrashButton>
          </Produto>
        ))
      }

    </Container>
  )
}

export default Home
