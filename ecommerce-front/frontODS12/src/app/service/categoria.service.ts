import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", "Basic YWRtaW46MTIzNDU2Nzg=" )

  }

  getAllResiduo(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("http://localhost:8080/residuo/todos", this.token)
  }

  getByIdResiduo(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/residuo/${id}`, this.token)
  }

  postResiduo(residuo: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>("http://localhost:8080/residuo/cadastrar", residuo, this.token)
  }

  putResiduo(residuo: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>("http://localhost:8080/residuo/atualizar", residuo, this.token)
  }

  deleteResiduo(id: number){
    return this.http.delete(`http://localhost:8080/residuo/deletar/${id}`, this.token)

  }
}
