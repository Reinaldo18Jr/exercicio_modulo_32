import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contatos from '../../components/Contatos'
import { Container, Titulo } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <ul>
        {itens.map((c) => (
          <li key={c.descricaoNome}>
            <Contatos
              id={c.id}
              descricaoNome={c.descricaoNome}
              descricaoEmail={c.descricaoEmail}
              descricaoTel={c.descricaoTel}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
