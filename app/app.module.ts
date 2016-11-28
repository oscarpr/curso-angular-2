import { HttpServico } from './http.servicio';
import { ModuloCompeticiones } from './competiciones/competiciones.modulo';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpModule, ModuloCompeticiones, RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
