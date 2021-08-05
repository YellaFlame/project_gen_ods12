import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  lixo: Categoria = new Categoria
  listaLixo: Categoria[]
  eae = environment.token
  
  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  ngOnInit(){

    if(environment.token == ""){
      this.router.navigate(["/inicio"])
      alert("Seu token expirou")
    }

    this.findAllResiduo()
  }

  cadastrar(){
      this.categoriaService.postResiduo(this.lixo).subscribe((resp: Categoria) => {
        this.lixo = resp
        alert("Residuo cadastrado com sucesso.")
        this.findAllResiduo()
        this.lixo = new Categoria()
      }, erro =>{
        if(erro.status == 400){
          alert("Deu biziu ae mano")
        }
      })
    }

    findAllResiduo(){
      this.categoriaService.getAllResiduo().subscribe((resp: Categoria[])=>{
        this.listaLixo = resp
      })
    }
  }

