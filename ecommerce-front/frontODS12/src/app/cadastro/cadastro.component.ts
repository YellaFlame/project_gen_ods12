import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDto } from '../model/UserLoginDto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //Atributos para Usuario
  user: Usuario = new Usuario()
  cSenha: string
  tipoU: string = ""
  termos: boolean = true

  //Atributos para Logar
  userLogin: UserLoginDto = new UserLoginDto

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    
  }

  //Metodos para Cadastro
  confirmarSenha(event: any) {
    this.cSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoU = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoU
    if (this.user.senha != this.cSenha) {
      this.alert.showAlertDanger("As senhas estão incorretas!")
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        environment.tipo = this.tipoU
        this.router.navigate(["/cadastro"])
        this.alert.showAlertSuccess("Usuário cadastrado com sucesso!")
        this.user = new Usuario()
      }, erro => {
        if (erro.status == 400) {
          this.alert.showAlertInfo("Email ou usuário existentes")
        } else {
          if (erro.status == 500) {
            this.alert.showAlertInfo("Por favor, preencha todos os campos")
          }
        }
      })
    }
  }

  changeEvent(event:any) {
    if(event.target.checked) {
      this.termos = false
    } else {
      this.termos = true
    }
  }

  validaEmail() {
    let email = <HTMLSelectElement>document.querySelector('#email')
    let txt = <HTMLSelectElement>document.querySelector('.email')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txt.innerHTML = "e-mail inválido"
      email.style.border = '2px solid red'
      txt.style.display = 'block'
      txt.style.color = "red"
    }  else {
      txt.style.display = 'none'
      email.style.borderColor = "black"
  }
  }

  //Metodos para Logar
  entrar() {

    this.authService.entrar(this.userLogin).subscribe((resp: UserLoginDto) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.usuario = this.userLogin.usuario
      environment.tipo = this.userLogin.tipo
      environment.id = this.userLogin.id
      console.log(JSON.stringify(this.userLogin))

      this.router.navigate(["/inicio"])
    }, erro => {
      if (erro.status == 500) {
        this.alert.showAlertDanger("Usuário ou senha incorretos")
      }
    })
  }
}
