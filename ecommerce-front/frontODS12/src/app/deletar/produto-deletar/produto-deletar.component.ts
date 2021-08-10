import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-deletar',
  templateUrl: './produto-deletar.component.html',
  styleUrls: ['./produto-deletar.component.css']
})
export class ProdutoDeletarComponent implements OnInit {
  produto: Produto = new Produto()
  idProd: number

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCat: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/produto'])
    }

    this.idProd = this.route.snapshot.params['id']
    this.getByIdProduto(this.idProd)
  }

  getByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
    })
  }

  deletar(){
    this.produtoService.deleteProduto(this.idProd).subscribe(()=> {
      alert('Produto deletado.')
      this.router.navigate(['/produto'])
    })
  }

}
