import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { DescarteComponent } from './descarte/descarte.component';
import { InicioComponent } from './inicio/inicio.component';
import { ParceiroComponent } from './parceiro/parceiro.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:"", redirectTo:"inicio", pathMatch:"full"},

  {path:"inicio", component:InicioComponent},
  {path:"sobre", component:SobreComponent},
  {path:"contato", component:ContatoComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"descarte", component:DescarteComponent},
  {path:"parceiro", component:ParceiroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
