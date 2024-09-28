import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Container, Titulo } from '../../styles'
import { DadosDoContato } from '../../styles'
import { cadastrar } from '../../store/reducers/contatos'

// const Formulario = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const [nome, setNome] = useState('')
//   const [email, setEmail] = useState('')
//   const [telefone, setTelefone] = useState('')

//   const cadastrarContato = (evento: FormEvent) => {
//     evento.preventDefault()

//     dispatch(
//       cadastrar({
//         nome,
//         descricaoEmail,
//         descricaoTel
//       })
//     )
//     navigate('/')
//   }

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [descricaoNome, setDescricaoNome] = useState('')
  const [descricaoEmail, setDescricaoEmail] = useState('')
  const [descricaoTel, setDescricaoTel] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        descricaoNome,
        descricaoEmail,
        descricaoTel
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <form onSubmit={cadastrarContato}>
        <DadosDoContato
          value={descricaoNome}
          onChange={(evento) => setDescricaoNome(evento.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <DadosDoContato
          value={descricaoEmail}
          onChange={(evento) => setDescricaoEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <DadosDoContato
          value={descricaoTel}
          onChange={(evento) => setDescricaoTel(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </form>
    </Container>
  )
}

export default Formulario
