export class Pet {
  public idPet: number

  public idUsuario: number

  public idadePet: number

  public nmPet: string

  public racaPet: string

  constructor(idPet, idUsuario, idadePet, nmPet, racaPet) {
    this.idPet = idPet
    this.idUsuario = idUsuario
    this.idadePet = idadePet
    this.nmPet = nmPet
    this.racaPet = racaPet
  }
}
