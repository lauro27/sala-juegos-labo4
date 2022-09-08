import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';
import { NoEncontradoComponent } from './Vistas/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    SobreMiComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
