import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { PkmnCardsComponent } from './pkmn-cards/pkmn-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmnCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
