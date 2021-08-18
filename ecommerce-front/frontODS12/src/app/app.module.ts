import { HttpClientModule } from "@angular/common/http"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

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
import { FormsModule } from "@angular/forms";
import { ParceiroComponent } from "./parceiro/parceiro.component";
import { DescarteComponent } from "./descarte/descarte.component";
import { PlasticoComponent } from './descarte/plastico/plastico.component';
import { PapelComponent } from './descarte/papel/papel.component';
import { MetalComponent } from './descarte/metal/metal.component';
import { VidroComponent } from './descarte/vidro/vidro.component';
import { OrganicoComponent } from './descarte/organico/organico.component';
import { CategoriaEditComponent } from "./edit/categoria-edit/categoria-edit.component";
import { AlertasComponent } from './alertas/alertas.component';


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
    CategoriaComponent,
    ParceiroComponent,
    DescarteComponent,
    PlasticoComponent,
    PapelComponent,
    MetalComponent,
    VidroComponent,
    OrganicoComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
