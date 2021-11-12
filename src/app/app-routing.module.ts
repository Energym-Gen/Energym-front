import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path: 'cadastrar' ,component: CadastrarComponent},
  {path:'login',component: LoginComponent},

  {path:"inicio", component: InicioComponent},
  {path:"rodape", component: RodapeComponent},
  
  {path:"tema-edit/:id",component: TemaEditComponent},
  {path:"tema-delete/:id",component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
