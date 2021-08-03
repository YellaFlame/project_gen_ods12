import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario = environment.usuario

  constructor( 
    private router: Router,
    public auth: AuthService
  ) { }
  
  ngOnInit(){
    
  }

  sair(){
    this.router.navigate(["/inicio"])
    alert("Log-Off realizado com sucesso, obrigado por visitar nossa pagina")
    environment.token = ''
    environment.Id = 0
    environment.tipo = ''
    environment.usuario = ''
  }
}
