import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  lixo: Categoria = new Categoria
  listaLixo: Categoria[]
  
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    this.findAllResiduo()
    if(environment.token == ""){
      this.alertas.showAlertInfo("Seu token expirou")
      this.router.navigate(["/inicio"])
      
    }
    
  }

  cadastrar(){
    console.log("Lixo "+JSON.stringify(this.lixo))
      this.categoriaService.postResiduo(this.lixo).subscribe((resp: Categoria) => {
        this.lixo = resp
        this.alertas.showAlertSuccess("Residuo cadastrado com sucesso.")
        this.findAllResiduo()
        this.lixo = new Categoria()
      
      })
    }

    findAllResiduo(){
      this.categoriaService.getAllResiduo().subscribe((resp: Categoria[])=>{
        this.listaLixo = resp
        console.log("Lixo "+JSON.stringify(this.listaLixo))
      })
    }
  }

