import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', "Basic bmFydXRvOjEyMzQ1Njc4")
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://sucateriaods12.herokuapp.com/produto/buscar/todos', this.token)
  }

  getByIdProduto(idProduto:number): Observable<Produto>{
    return this.http.get<Produto>('https://sucateriaods12.herokuapp.com/produto/buscar/id/${idProduto}', this.token)
  }

  getByStatusProduto(status:string): Observable<Produto>{
    return this.http.get<Produto>(`https://sucateriaods12.herokuapp.com/produto/buscar/status/${status}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://sucateriaods12.herokuapp.com/produto/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://sucateriaods12.herokuapp.com/produto/atualizar/id', produto, this.token)
  }

  deleteProduto(idProduto:number) {
    return this.http.delete(`https://sucateriaods12.herokuapp.com/produto/deletar/id/${idProduto}`, this.token)
  }
}
