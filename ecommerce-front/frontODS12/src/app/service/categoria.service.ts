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
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllResiduo(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("https://sucateriaods12.herokuapp.com/residuo/todos", this.token)
  }

  getByIdResiduo(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://sucateriaods12.herokuapp.com/residuo/${id}`, this.token)
  }

  postResiduo(residuo: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>("https://sucateriaods12.herokuapp.com/residuo/cadastrar", residuo, this.token)
  }

  putResiduo(residuo: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>("https://sucateriaods12.herokuapp.com/residuo/atualizar", residuo, this.token)
  }

  deleteResiduo(id: number){

    return this.http.delete(`https://sucateriaods12.herokuapp.com/residuo/deletar/${id}`, this.token)
  }
}

