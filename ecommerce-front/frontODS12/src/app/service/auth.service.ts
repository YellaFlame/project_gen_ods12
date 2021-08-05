import { HttpClient } from '@angular/common/http';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
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
    return this.http.post<UserLoginDto>("http://localhost:8080/api/v1/usuario/logar", userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/api/v1/usuario/cadastrar", user)
  }
  

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}



