import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path:'',redirectTo: 'cadastrar',pathMatch: 'full'},
  {path: 'cadastrar' ,component: CadastrarComponent},


  {path:'',redirectTo: 'login',pathMatch: 'full'},
  {path:'login',component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"inicio", component: InicioComponent},
  {path:"rodape", component: RodapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
