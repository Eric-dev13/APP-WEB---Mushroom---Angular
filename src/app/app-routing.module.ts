import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { SubjectsComponent, } from './pages/forum/subjects/subjects.component';

import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { AuthenticateComponent } from './pages/security/authenticate/authenticate.component';

import { DashboardComponent } from './pages/authentication/dashboard/dashboard.component';
import { EditerProfilComponent } from './pages/authentication/user/editer-profil/editer-profil.component';
import { ProfilComponent } from './pages/authentication/user/profil/profil.component';

import { EdibilitiesComponent } from './pages/authentication/admin/edibility/edibilities/edibilities.component';
import { FormEdibilityComponent } from './pages/authentication/admin/edibility/form-edibility/form-edibility.component';

import { ListMushroomComponent } from './pages/authentication/admin/mushroom/list-mushroom/list-mushroom.component';
import { DetailMushroomComponent } from './pages/authentication/admin/mushroom/detail-mushroom/detail-mushroom.component';
import { FormMushroomComponent } from './pages/authentication/admin/mushroom/form-mushroom/form-mushroom.component';
import { EditerPasswordComponent } from './pages/authentication/user/editer-password/editer-password.component';
import { ActualiteComponent } from './pages/actualite/actualite/actualite.component';
import { authenticatedGuard } from './guards/authenticated.guard';
import { isAdminGuard } from './guards/is-admin.guard';


const routes: Routes = [
  // ROUTES PUBLIQUES
  { path: "", component: HomeComponent }, // Route par défaut (page d'accueil)
  { path: "", loadChildren: () => import('./pages/mushroom/mushroom.module').then(m => m.MushroomModule) },
  { path: "forum", component: SubjectsComponent },
  { path: "actualite", component: ActualiteComponent },

  // ROUTES PROTEGES
  {
    path: 'back-office', component: DashboardComponent, children: [
      // ADMIN - mushroom
      { path: "admin/champignon/Liste-des-champignons", component: ListMushroomComponent, canActivate: [isAdminGuard] },
      { path: "admin/champignon/description/:id", component: DetailMushroomComponent, canActivate: [isAdminGuard] },
      { path: "admin/champignon/nouveau", component: FormMushroomComponent, canActivate: [isAdminGuard] },
      { path: "admin/champignon/editer/:id", component: FormMushroomComponent, canActivate: [isAdminGuard] },

      // ADMIN - edibility
      { path: "admin/comestibilite/liste", component: EdibilitiesComponent, canActivate: [isAdminGuard] },
      { path: "admin/comestibilite/nouveau", component: FormEdibilityComponent, canActivate: [isAdminGuard] },
      { path: "admin/comestibilite/editer/:id", component: FormEdibilityComponent, canActivate: [isAdminGuard] },

      //  ADMIN - USER ACCESS
      // { path: "admin/utilisateur/profils", component: },
      // { path: "admin/utilisateur/profil/:id", component: },

      // USER
      { path: "utilisateur/profil", component: ProfilComponent, canActivate: [authenticatedGuard] },
      { path: "utilisateur/profil/editer", component: EditerProfilComponent, canActivate: [authenticatedGuard] },
      { path: "utilisateur/profil/mdp/editer", component: EditerPasswordComponent, canActivate: [authenticatedGuard] },
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
