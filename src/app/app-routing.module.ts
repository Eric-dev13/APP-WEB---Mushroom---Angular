import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MushroomsComponent } from './mushroom/mushrooms/mushrooms.component';
import { MushromComponent } from './mushroom/mushroom/mushroom.component';
import { ForumComponent } from './forum/forum.component';
import { ListMushroomComponent } from './authenticated_acces/admin/mushroom/list-mushroom/list-mushroom.component';
import { FormMushroomComponent } from './authenticated_acces/admin/mushroom/form-mushroom/form-mushroom.component';
import { NotFoundComponent } from './page-error/not-found/not-found.component';
import { DetailMushroomComponent } from './authenticated_acces/admin/mushroom/detail-mushroom/detail-mushroom.component';
import { AuthenticateComponent } from './security/authenticate/authenticate.component';
import { EdibilitiesComponent } from './authenticated_acces/admin/edibility/edibilities/edibilities.component';
import { FormEdibilityComponent } from './authenticated_acces/admin/edibility/form-edibility/form-edibility.component';
import { DashboardComponent } from './authenticated_acces/dashboard/dashboard.component';
import { EditerPasswordComponent } from './authenticated_acces/user/editer-password/editer-password.component';
import { EditerProfilComponent } from './authenticated_acces/user/editer-profil/editer-profil.component';
import { ProfilComponent } from './authenticated_acces/user/profil/profil.component';




const routes: Routes = [
  // ROUTES PUBLIQUES
  { path: "", component: HomeComponent },
  { path: "guide-des-champignons", component: MushroomsComponent },
  { path: "champignon/:id", component: MushromComponent },
  { path: "forum", component: ForumComponent },

  // ROUTES PROTEGES
  {path: 'back-office/admin', component: DashboardComponent, children: [
      // ADMIN - mushroom
      { path: "champignon/Liste-des-champignons", component: ListMushroomComponent },
      { path: "champignon/description/:id", component: DetailMushroomComponent },
      { path: "champignon/nouveau", component: FormMushroomComponent },
      { path: "champignon/editer/:id", component: FormMushroomComponent },
      // ADMIN - edibility
      { path: "comestibilite/liste", component: EdibilitiesComponent },
      { path: "comestibilite/nouveau", component: FormEdibilityComponent },
      { path: "comestibilite/editer/:id", component: FormEdibilityComponent },
      //  ADMIN - USER ACCESS
       //{ path: "admin/utilisateur/profils", component:  },
      //{ path: "admin/utilisateur/profil/:id", component:  },
    ]
  },
  {path: 'back-office/utilisateur', component: DashboardComponent, children: [
    // USER
    { path: "profil", component: ProfilComponent },
    { path: "profil/editer/:id", component: EditerProfilComponent },
  ]
},

  // ROUTE D'AUTHENTIFICATION
  { path: "securite/authentification", component: AuthenticateComponent },

  // TOUTES LES AUTRES ROUTES = NOT FOUND
  { path: "**", component: NotFoundComponent } // Page d'erreur 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
