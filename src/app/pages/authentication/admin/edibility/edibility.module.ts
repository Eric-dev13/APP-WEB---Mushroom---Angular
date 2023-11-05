import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdibilityRoutingModule } from './edibility-routing.module';
import { EdibilitiesComponent } from './edibilities/edibilities.component';
import { FormEdibilityComponent } from './form-edibility/form-edibility.component';


@NgModule({
  declarations: [
    // EdibilitiesComponent,
    // FormEdibilityComponent
  ],
  imports: [
    CommonModule,
    EdibilityRoutingModule
  ]
})
export class EdibilityModule { }
