import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { ParceiroComponent } from './parceiro/parceiro.component';
import { DescarteComponent } from './descarte/descarte.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {path:"", redirectTo:"inicio", pathMatch:"full"},

  {path:"inicio", component:InicioComponent},
  {path:"sobre", component:SobreComponent},
  {path:"contato", component:ContatoComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"como-funciona", component:ComoFuncionaComponent},
  {path:"categoria", component:CategoriaComponent},
  {path:"produto", component: ProdutoComponent},
  {path:"parceiro", component: ParceiroComponent},
  {path:"descarte", component: DescarteComponent},
  {path:"cadastrar", component: CadastrarComponent}


  //{path:"produto/:id", component: ProdutoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
