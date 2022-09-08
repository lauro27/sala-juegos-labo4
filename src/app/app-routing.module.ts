import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { NoEncontradoComponent } from './Vistas/no-encontrado/no-encontrado.component';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'', component: SobreMiComponent},
  {path:'juego', component: JuegoComponent, children:[{path:'nuevonpm', component: SobreMiComponent}]},
  {path:'**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
