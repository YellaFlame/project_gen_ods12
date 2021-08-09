import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Categoria } from '../model/Categoria';
import { CategoriaGet } from '../model/CategoriaGet';

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

  getAllResiduo(): Observable<CategoriaGet[]>{
    return this.http.get<CategoriaGet[]>("https://sucateriaods12.herokuapp.com/residuo/todos", this.token)
  }

  postResiduo(residuo: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>("https://sucateriaods12.herokuapp.com/residuo/cadastrar", residuo, this.token)
  }
}
