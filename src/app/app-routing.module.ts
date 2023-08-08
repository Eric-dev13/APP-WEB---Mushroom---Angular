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
import { DetailMushroomComponent } from './admin/mushroom/detail-mushroom/detail-mushroom.component';
import { AuthenticateComponent } from './security/authenticate/authenticate.component';




const routes: Routes = [
  // ROUTES PUBLIQUES
  { path:"", component: HomeComponent },
  { path:"guide-des-champignons",component: MushroomsComponent },
  { path:"champignon/:id",component: MushromComponent },
  { path:"champignon/description/:slug",component: MushromComponent },
  { path:"forum", component: ForumComponent },
  // ROUTES PROTEGES - ADMIN
  { path:"admin/champignon/Liste-des-champignons", component: ListMushroomComponent },
  { path:"admin/champignon/description/:id", component: DetailMushroomComponent },
  { path:"admin/champignon/nouveau", component: FormMushroomComponent },
  { path:"admin/champignon/editer/:id", component: FormMushroomComponent },
  { path:"admin/media/Liste-des-medias", component: ListMediaComponent },
  // ROUTE D'AUTHENTIFICATION
  { path:"securite/authentification", component: AuthenticateComponent },
  // TOUTES LES AUTRES ROUTES = NOT FOUND
  { path: "**", component: NotFoundComponent} // Page d'erreur 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
