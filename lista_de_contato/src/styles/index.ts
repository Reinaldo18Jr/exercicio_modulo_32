import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'
import { Botao } from '../components/Contatos/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.main`
  max-width: 768px;
  width: 100%;
  margin: 24px auto;
`
export const Titulo = styled.h1`
  margin-bottom: 16px;
  text-align: center;
`

export const DadosDoContato = styled.input`
  color: #000;
  font-size: 18px;
  line-height: 20px;
  padding: 8px;
  margin-bottom: 16px;
  display: block;
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
