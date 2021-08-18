import { Produto } from "./Produto"

export class Usuario {
    
    public idUsuario: number
    public nome: string
    public sobrenome: string
    public email: string
    public senha: string
    public tipoUsuario: string //enum
    public usuario: string
    public tipo: string 
    public produto: Produto[]
}