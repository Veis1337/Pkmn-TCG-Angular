import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // It seems that you have AppComponent here, but you should remove it from the routes.
import { BoosterPackOpeningComponent } from './booster-pack-opening/booster-pack-opening.component';

const routes: Routes = [
  { path: 'booster-pack-opening', component: BoosterPackOpeningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
