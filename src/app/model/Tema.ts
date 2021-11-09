import { Postagem } from "./Postagem";

export class Tema{
  public id: number
  public ativo: boolean
  public economia: number
  public equipamento: string
  public postagem: Postagem[]

}
