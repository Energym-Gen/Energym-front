import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { SobrenosComponent } from './sobrenos/sobrenos.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentRodapeComponent } from './component-rodape/component-rodape.component';

import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SobrenosComponent,
    CadastrarComponent,
    MenuComponent,
    SobrenosComponent,
    ComponentRodapeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
