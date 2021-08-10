import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoEditarComponent } from './editar/produto-editar/produto-editar.component';
import { ProdutoDeletarComponent } from './deletar/produto-deletar/produto-deletar.component';
import { FormsModule } from "@angular/forms";
import { CategoriaEditComponent } from "./edit/categoria-edit/categoria-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    InicioComponent,
    SobreComponent,
    ContatoComponent,
    CadastroComponent,
    ComoFuncionaComponent,
    CategoriaComponent,
    ProdutoComponent,
    ProdutoEditarComponent,
    ProdutoDeletarComponent,
    CategoriaComponent,
    CategoriaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
