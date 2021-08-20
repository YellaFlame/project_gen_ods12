import { Component } from "@angular/core"
import { OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { environment } from "src/environments/environment.prod"
import { Categoria } from "../model/Categoria"
import { Produto } from "../model/Produto"
import { Usuario } from "../model/Usuario"
import { AlertasService } from "../service/alertas.service"
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

  user: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    public auth: AuthService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
       this.alert.showAlertInfo('Sua sessão expirou, faça o login novamente.')
       this.router.navigate(['/inicio'])
    }
    
    this.getAllProdutos()
    this.getAllCategoria()
  }

   //USUÁRIO MÉTODO
   getByIdUser(){
     this.produtoService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
       this.user = resp
     })
   }

   //CATEGORIA MÉTODOS
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

  findByIdCategoria(id: number){
    this.categoriaService.getByIdResiduo(id).subscribe((resp: Categoria)=> {
      this.categoria = resp
    })
  }

  //PRODUTOS MÉTODOS
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
    this.produto.status = "Disponivel";
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.alert.showAlertSuccess('Produto criado com sucesso!')
      this.getAllProdutos()
      this.produto = new Produto()
    })
  }

  reservado(){
    // this.categoria.id = this.idCategoria
    // this.produto.categoria = this.categoria
    this.produto.status = "Reservado";
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.produto = new Produto()
      this.getAllProdutos()
      this.router.navigate(['/produto'])
    })
  }

  cancelar(){
    this.produto.status = "Disponivel";
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.produto = new Produto()
      this.getAllProdutos()
      this.router.navigate(['/produto'])
    })
  }

  finalizado(){
    // this.categoria.id = this.idCategoria
    // this.produto.categoria = this.categoria
    this.produto.status = "Finalizado";
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.alert.showAlertSuccess('Parabéns por finalizar.')
      this.produto = new Produto()
      this.getAllProdutos()
      this.router.navigate(['/produto'])
    })
  }

  atualizar(){
    // this.categoria.id = this.idCategoria
    // this.produto.categoria = this.categoria

      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.alert.showAlertSuccess('Produto atualizado com sucesso.')
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
        this.alert.showAlertSuccess('Produto deletado.')
        this.router.navigate(['/produto'])
        this.getAllProdutos()
      })
    }

  }
}
