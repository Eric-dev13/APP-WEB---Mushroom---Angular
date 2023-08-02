import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MushroomsComponent } from './mushroom/mushrooms/mushrooms.component';
import { MushromComponent } from './mushroom/mushroom/mushroom.component';
import { ForumComponent } from './forum/forum.component';
import { ListMediaComponent } from './admin/media/list-media/list-media.component';
import { ListMushroomComponent } from './admin/mushroom/list-mushroom/list-mushroom.component';
import { FormMushroomComponent } from './admin/mushroom/form-mushroom/form-mushroom.component';
import { NotFoundComponent } from './page-error/not-found/not-found.component';



const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"guide-des-champignons",component: MushroomsComponent },
  { path:"champignon/:slug",component: MushromComponent },
  { path:"champignon/:id",component: MushromComponent },
  { path:"forum", component: ForumComponent },
  // ADMIN
  { path:"admin/champignons/Liste-des-champignons", component: ListMushroomComponent },
  { path:"admin/champignons/nouveau", component: FormMushroomComponent },
  { path:"admin/champignons/editer/:id", component: FormMushroomComponent },

  { path:"admin/media/Liste-des-medias", component: ListMediaComponent },
  
  { path: "**", component: NotFoundComponent} // Page d'erreur 404 - NOT FOUND
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
