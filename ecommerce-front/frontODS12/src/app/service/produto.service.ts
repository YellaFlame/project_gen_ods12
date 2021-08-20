import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://sucateriaods12.herokuapp.com/produto/buscar/todos', this.token)
  }

  getByIdProduto(id:number): Observable<Produto>{
    return this.http.get<Produto>(`https://sucateriaods12.herokuapp.com/produto/buscar/${id}`, this.token)
  }

  getByStatusProduto(status:string): Observable<Produto>{
    return this.http.get<Produto>(`https://sucateriaods12.herokuapp.com/produto/buscar/status/${status}`, this.token)
  }

  getByEnderecoProduto(endereco:string): Observable<Produto>{
    return this.http.get<Produto>(`https://sucateriaods12.herokuapp.com/produto/buscar/endereco/${endereco}`, this.token)
  }

  getByDescricaoProduto(descricao:string): Observable<Produto>{
    return this.http.get<Produto>(`https://sucateriaods12.herokuapp.com/produto/buscar/descricao/${descricao}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://sucateriaods12.herokuapp.com/produto/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://sucateriaods12.herokuapp.com/produto/atualizar', produto, this.token)
  }

  deleteProduto(id:number) {
    return this.http.delete(`https://sucateriaods12.herokuapp.com/produto/deletar/${id}`, this.token)
  }

  getByIdUsuario(idUsuario:number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://sucateriaods12.herokuapp.com/usuario/buscar/${idUsuario}`, this.token)
  }
}
