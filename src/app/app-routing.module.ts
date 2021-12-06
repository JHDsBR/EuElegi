import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeputadoComponent} from './deputado/deputado.component';

const routes: Routes = [
  {path: 'deputado-component', component:DeputadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
