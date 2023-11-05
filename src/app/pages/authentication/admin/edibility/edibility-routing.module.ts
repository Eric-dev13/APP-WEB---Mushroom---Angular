import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EdibilitiesComponent } from './edibilities/edibilities.component';
import { FormEdibilityComponent } from './form-edibility/form-edibility.component';


const route: Routes = [
  { path: "admin/comestibilite/liste", component: EdibilitiesComponent },
  { path: "admin/comestibilite/nouveau", component: FormEdibilityComponent },
  { path: "admin/comestibilite/editer/:id", component: FormEdibilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class EdibilityRoutingModule { }
