import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMushroomComponent } from './list-mushroom/list-mushroom.component';
import { DetailMushroomComponent } from './detail-mushroom/detail-mushroom.component';
import { FormMushroomComponent } from './form-mushroom/form-mushroom.component';

const routes: Routes = [
  { path: "admin/champignon/Liste-des-champignons", component: ListMushroomComponent },
  { path: "admin/champignon/description/:id", component: DetailMushroomComponent },
  { path: "admin/champignon/nouveau", component: FormMushroomComponent },
  { path: "admin/champignon/editer/:id", component: FormMushroomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMushroomRoutingModule { }
