import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaGet } from '../model/CategoriaGet';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  lixo: Categoria = new Categoria
  listaLixo: CategoriaGet[]
  
  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.findAllResiduo()
    if(environment.token == ""){
      this.router.navigate(["/inicio"])
      alert("Seu token expirou")
    }

    
    
  }

  cadastrar(){
      this.categoriaService.postResiduo(this.lixo).subscribe((resp: Categoria) => {
        this.lixo = resp
        alert("Residuo cadastrado com sucesso.")
        this.findAllResiduo()
        this.lixo = new Categoria()
      }, erro =>{
        if(erro.status == 500){
          alert("Ja tem esse ai vei")
        }
      })
    }

    findAllResiduo(){
      this.categoriaService.getAllResiduo().subscribe((resp: CategoriaGet[])=>{
        this.listaLixo = resp
      })
    }
  }

