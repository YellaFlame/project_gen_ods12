import { Component } from "@angular/core"
import { OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { environment } from "src/environments/environment.prod"
import { Categoria } from "../model/Categoria"
import { Produto } from "../model/Produto"
import { AuthService } from "../service/auth.service"
import { CategoriaService } from "../service/categoria.service"
import { ProdutoService } from "../service/produto.service"


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProd: number = 0

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    public auth: AuthService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
<<<<<<< HEAD
<<<<<<< HEAD
    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/inicio'])
     }
=======
=======
>>>>>>> 82cc62e893453c39b24e2d1994c25f3ce8df0157
    // if(environment.token == '') {
    //  alert('Sua sessão expirou, faça o login novamente.')
    //   this.router.navigate(['/inicio'])
    // }
<<<<<<< HEAD
>>>>>>> 82cc62e893453c39b24e2d1994c25f3ce8df0157
=======
>>>>>>> 82cc62e893453c39b24e2d1994c25f3ce8df0157

    this.getAllProdutos()
    this.getAllCategoria()
  }

  getAllCategoria(){
    this.categoriaService.getAllResiduo().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  getByIdCategoria(){
    this.categoriaService.getByIdResiduo(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  getAllProdutos() {
      this.produtoService.getAllProduto().subscribe((resp: Produto []) => {
        this.listaProdutos = resp
      })
  }

  getByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
      //alert("produto "+ JSON.stringify(this.produto))
    })
  }

  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto criado com sucesso!')
      this.getAllProdutos()
      this.produto = new Produto()
    })
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdResiduo(id).subscribe((resp: Categoria)=> {
      this.categoria = resp
    })
  }
  atualizar(){
    // this.categoria.id = this.idCategoria
    // this.produto.categoria = this.categoria

      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert('Produto atualizado com sucesso.')
      this.produto = new Produto()
      this.getAllProdutos()
      this.router.navigate(['/produto'])
    })
  }

  pegarId(idInput: number){
    this.idProd = idInput;
    this.getByIdProduto(this.idProd)
  }

  deletar(){
    if(this.idProd != 0) {
      this.produtoService.deleteProduto(this.idProd).subscribe(()=> {
        alert('Produto deletado.')
        this.router.navigate(['/produto'])
        this.getAllProdutos()
      })
    }
    
  }
}