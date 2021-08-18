import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {


  lixo: Categoria = new Categoria()
  id: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      this.alert.showAlertInfo("Seu token expirou")
      this.router.navigate(["/inicio"])
    }

      this.id = this.route.snapshot.params["id"]
      this.findyByIdCategoria(this.id)
  }


  findyByIdCategoria(id: number){
    this.categoriaService.getByIdResiduo(id).subscribe((resp: Categoria) => {
      this.lixo = resp
    })
  }

  apagar(){
    this.categoriaService.deleteResiduo(this.id).subscribe(()=>{
      this.alert.showAlertSuccess("Deletado com sucesso")
      this.router.navigate(["/categoria"])
    })
  }
  gambiarra(){
    this.router.navigate(["/categoria"])
  }
}
