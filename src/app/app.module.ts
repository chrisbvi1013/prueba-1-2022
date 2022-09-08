import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadosComponent } from './heroes/listados/listados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
