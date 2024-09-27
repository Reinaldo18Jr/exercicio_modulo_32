import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { BotaoSalvar, DadosDoContato } from '../../styles'

type Props = Contato

const Contatos = ({
  descricaoNome,
  descricaoEmail,
  descricaoTel,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contatoNome, setContatoNome] = useState('')
  const [contatoEmail, setContatoEmail] = useState('')
  const [contatoTel, setContatoTel] = useState('')

  useEffect(() => {
    if (descricaoNome.length > 0) {
      setContatoNome(descricaoNome)
    }
  }, [descricaoNome])

  useEffect(() => {
    if (descricaoEmail.length > 0) {
      setContatoEmail(descricaoEmail)
    }
  }, [descricaoEmail])

  useEffect(() => {
    if (descricaoTel.length > 0) {
      setContatoTel(descricaoTel)
    }
  }, [descricaoTel])

  function cancelarEdicao() {
    setEstaEditando(false)
    setContatoNome(descricaoNome)
    setContatoEmail(descricaoEmail)
    setContatoTel(descricaoTel)
  }

  return (
    <S.Card>
      <DadosDoContato
        disabled={!estaEditando}
        value={contatoNome}
        onChange={(evento) => setContatoNome(evento.target.value)}
        type="text"
        placeholder="Nome do Contato"
      />
      <DadosDoContato
        disabled={!estaEditando}
        value={contatoEmail}
        onChange={(evento) => setContatoEmail(evento.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <DadosDoContato
        disabled={!estaEditando}
        value={contatoTel}
        onChange={(evento) => setContatoTel(evento.target.value)}
        type="tel"
        placeholder="Telefone"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricaoNome,
                    descricaoEmail,
                    descricaoTel,
                    id: id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contatos
