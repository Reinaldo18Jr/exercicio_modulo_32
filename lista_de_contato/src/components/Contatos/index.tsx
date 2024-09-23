import { useState } from 'react'
import * as S from './styles'

const Contatos = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.DadosDoContato type="text" placeholder="Nome do Contato" />
      <S.DadosDoContato type="email" placeholder="E-mail" />
      <S.DadosDoContato type="tel" placeholder="Telefone" />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contatos
