import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PkmnCardsComponent } from './pkmn-cards/pkmn-cards.component';

const routes: Routes = [
  { path: 'pokemon-cards', component: PkmnCardsComponent },
  { path: '', redirectTo: '/pokemon-cards', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
