import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  lixo: Categoria = new Categoria

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      alert("Seu token expirou")
      this.router.navigate(["/inicio"])
  } 

  let id = this.route.snapshot.params["id"]
  this.findyByIdCategoria(id)

}

  findyByIdCategoria(id: number){
    this.categoriaService.getByIdResiduo(id).subscribe((resp: Categoria)=> {
      this.lixo = resp
    })
  }

  atualizar(){
    this.categoriaService.putResiduo(this.lixo).subscribe((resp: Categoria) =>{
      this.lixo = resp
      alert("Foi vei")
      this.router.navigate(["/categoria"])
    })
  }
}
