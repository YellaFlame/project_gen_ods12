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
    headers: new HttpHeaders().set('Authorization', 'Basic aGFubmFoOmFzZGZhc2Rm')
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produto/buscar/todos', this.token)
  }

  getByIdProduto(idProduto:number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/buscar/id/${idProduto}`, this.token)
  }

  getByStatusProduto(status:string): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/buscar/status/${status}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produto/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('http://localhost:8080/produto/atualizar/id', produto, this.token)
  }

  deleteProduto(idProduto:number) {
    return this.http.delete(`http://localhost:8080/produto/deletar/id/${idProduto}`, this.token)
  }
}
