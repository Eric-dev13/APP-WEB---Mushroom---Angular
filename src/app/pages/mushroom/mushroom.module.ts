import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MushroomRoutingModule } from './mushroom-routing.module';
import { MushromComponent } from './mushroom/mushroom.component';
import { MushroomsComponent } from './mushrooms/mushrooms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    MushromComponent,
    MushroomsComponent
  ],
  imports: [
    CommonModule,
    MushroomRoutingModule,
    FontAwesomeModule,
  ]
})
export class MushroomModule { 

}
