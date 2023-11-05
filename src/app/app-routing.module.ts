import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { SubjectsComponent, } from './pages/forum/subjects/subjects.component';
import { SubjectComponent } from './pages/forum/subject/subject.component';

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


const routes: Routes = [
  // ROUTES PUBLIQUES
  { path: "", component: HomeComponent }, // Route par défaut (page d'accueil)
  { path: "", loadChildren: () => import('./pages/mushroom/mushroom.module').then(m => m.MushroomModule) },

  { path: "forum", component: SubjectsComponent },



  // ROUTES PROTEGES

  // { path: "admin/champignon/Liste-des-champignons", component: ListMushroomComponent },
  {
    path: 'back-office', component: DashboardComponent, children: [
      // ADMIN - mushroom
      //{ path: "admin/champignon", loadChildren: () => import('./pages/authentication/admin/mushroom/admin-mushroom.module').then(m => m.AdminMushroomModule) },
      { path: "admin/champignon/Liste-des-champignons", component: ListMushroomComponent },
      { path: "admin/champignon/description/:id", component: DetailMushroomComponent },
      { path: "admin/champignon/nouveau", component: FormMushroomComponent },
      { path: "admin/champignon/editer/:id", component: FormMushroomComponent },

      // ADMIN - edibility
      //{ path: "comestibilite", loadChildren: () => import('./pages/authentication/admin/edibility/edibility.module').then(m => m.EdibilityModule) },
      { path: "admin/comestibilite/liste", component: EdibilitiesComponent },
      { path: "admin/comestibilite/nouveau", component: FormEdibilityComponent },
      { path: "admin/comestibilite/editer/:id", component: FormEdibilityComponent },

      //  ADMIN - USER ACCESS
      // { path: "admin/utilisateur", loadChildren: () => import('./pages/authentication/user/user.module').then(m => m.UserModule) },
      // { path: "admin/utilisateur/profils", component: },
      // { path: "admin/utilisateur/profil/:id", component: },

      // USER
      // { path: "utilisateur", loadChildren: () => import('./pages/authentication/user/user.module').then(m => m.UserModule) },
      { path: "utilisateur/profil", component: ProfilComponent },
      { path: "utilisateur/profil/editer", component: EditerProfilComponent },
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
