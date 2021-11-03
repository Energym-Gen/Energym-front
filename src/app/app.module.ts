import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SobrenosComponent } from './sobrenos/sobrenos.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentRodapeComponent } from './component-rodape/component-rodape.component';


@NgModule({
  declarations: [
    AppComponent,
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
