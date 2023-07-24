import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MushroomsComponent } from './mushrooms/mushrooms.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"guide-des-champignons", component: MushroomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
