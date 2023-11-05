import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMushroomRoutingModule } from './admin-mushroom-routing.module';
import { ListMushroomComponent } from './list-mushroom/list-mushroom.component';
import { DetailMushroomComponent } from './detail-mushroom/detail-mushroom.component';
import { FormMushroomComponent } from './form-mushroom/form-mushroom.component';


@NgModule({
  declarations: [
    // ListMushroomComponent,
    // DetailMushroomComponent,
    // FormMushroomComponent
  ],
  imports: [
    CommonModule,
    AdminMushroomRoutingModule
  ]
})
export class AdminMushroomModule { }