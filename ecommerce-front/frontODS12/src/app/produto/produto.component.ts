import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  seila = environment.token

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token = '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/inicio'])
    }

    this.findAllProdutos()
  }

  findAllProdutos() {
      this.produtoService.getAllProduto().subscribe((resp: Produto []) => {
        this.listaProdutos = resp
      })
  }

  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto criado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produto()
    })
  }
}
