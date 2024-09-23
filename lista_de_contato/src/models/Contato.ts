class Contato {
  descricaoNome: string
  descricaoEmail: string
  descricaoTel: string
  id: number

  constructor(
    descricaoNome: string,
    descricaoEmail: string,
    descricaoTel: string,
    id: number
  ) {
    this.descricaoNome = descricaoNome
    this.descricaoEmail = descricaoEmail
    this.descricaoTel = descricaoTel
    this.id = id
  }
}

export default Contato
