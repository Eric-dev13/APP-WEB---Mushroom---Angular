import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MushroomsComponent } from './mushrooms/mushrooms.component';
import { MushromComponent } from './mushroom/mushroom.component';


const route: Routes = [
  { path: "guide-des-champignons", component: MushroomsComponent },
  { path: "champignon/:id", component: MushromComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class MushroomRoutingModule { }
