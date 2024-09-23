import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contatos from '../../components/Contatos'
import { Container, Titulo } from './styles'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.descricaoNome}>
            <Contatos
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
