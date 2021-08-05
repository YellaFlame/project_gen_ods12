import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:"", redirectTo:"inicio", pathMatch:"full"},

  {path:"inicio", component:InicioComponent},
  {path:"sobre", component:SobreComponent},
  {path:"contato", component:ContatoComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"produto", component: ProdutoComponent}
  //{path:"produto/:id", component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
