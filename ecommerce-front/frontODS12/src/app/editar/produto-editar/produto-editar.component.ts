import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProd: number

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number
 

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    // if(environment.token == '') {
    //  alert('Sua sessão expirou, faça o login novamente.')
    //   this.router.navigate(['/inicio'])
    // }

    
    let id = this.route.snapshot.params['id']
    //this.getByIdProduto(id)
    this.getAllProdutos()
    this.getAllCategoria()
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto []) => {
      this.listaProdutos = resp
    })
}

  getAllCategoria(){
    this.categoriaService.getAllResiduo().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  atualizar(){
    this.categoria.id = this.idCategoria
    //this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert('Produto atualizado com sucesso.')
      this.router.navigate(['/produto'])
    })
  }


}

