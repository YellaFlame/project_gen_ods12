import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.component.html',
  styleUrls: ['./parceiro.component.css']
})
export class ParceiroComponent implements OnInit {

  //Atributos para Usuario
  user: Usuario = new Usuario()
  termos: boolean = true

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  

  validaEmail() {
    let email = <HTMLSelectElement>document.querySelector('#exampleFormControlInput1')
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

  validaCnpj(){
    let cnpj = <HTMLSelectElement>document.querySelector('#exampleFormControlInput2')
    let txt = <HTMLSelectElement>document.querySelector('.cnpj')
    if(cnpj.value.length < 14) {
      txt.innerHTML = "CNPJ inválido"
      cnpj.style.border = '2px solid red'
      txt.style.display = 'block'
      txt.style.color = "red"
    }  else {
      txt.style.display = 'none'
      cnpj.style.borderColor = "black"
  }
  }

  changeEvent(event:any) {
    if(event.target.checked) {
      this.termos = false
    } else {
      this.termos = true
    }
  }

}
