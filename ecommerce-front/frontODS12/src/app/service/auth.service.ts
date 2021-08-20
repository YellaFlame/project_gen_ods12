import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDto } from '../model/UserLoginDto';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(userLogin: UserLoginDto): Observable<UserLoginDto>{
    return this.http.post<UserLoginDto>("https://sucateriaods12.herokuapp.com/usuario/logar", userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("https://sucateriaods12.herokuapp.com/usuario/cadastrar", user) 
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ""){
       ok = true
    }

    return ok
  }
  
  sucateiro(){
    let ok: boolean = false
    if(environment.tipo == "sucateiro"){
      ok = true
    }
    return ok
  }

  condonime(){
    let ok: boolean = false
    if(environment.tipo == "condonime"){
      ok = true
    }
    return ok
  }

  admin(){
    let ok: boolean = false
    if(environment.tipo == "adm"){
      ok = true
    }
    return ok
  }
  
}



