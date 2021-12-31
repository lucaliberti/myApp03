import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAutoComponent } from './lista-auto/lista-auto.component';
import { ElementoAutoComponent } from './elemento-auto/elemento-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutoComponent,
    ElementoAutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
