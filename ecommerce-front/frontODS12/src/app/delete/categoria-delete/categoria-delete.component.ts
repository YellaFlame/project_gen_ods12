import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';

import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  idCategoria: number
  lixo2: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      alert("Seu token expirou")
      this.router.navigate(["/inicio"])

      this.idCategoria = this.route.snapshot.params["id"]
      this.findyByIdCategoria(this.idCategoria)
  }
}

  findyByIdCategoria(id: number){
    this.categoriaService.getByIdResiduo(id).subscribe((resp: Categoria) => {
      this.lixo2 = resp
    })
  }

  apagar(){
    this.categoriaService.deleteResiduo(this.idCategoria).subscribe(()=>{
      alert("Deletou mano")
      this.router.navigate(["/categoria"])
    })
  }

}
