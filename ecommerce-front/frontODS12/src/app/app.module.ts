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
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from "@angular/forms";
import { CategoriaComponent } from './categoria/categoria.component';
import { ParceiroComponent } from "./parceiro/parceiro.component";
import { DescarteComponent } from "./descarte/descarte.component";
import { CadastrarComponent } from './cadastrar/cadastrar.component';

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
    ProdutoComponent,
    CategoriaComponent,
    ParceiroComponent,
    DescarteComponent,
    CadastrarComponent

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
