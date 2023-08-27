import { NgModule } from '@angular/core'; // 
import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel
import { BrowserModule } from '@angular/platform-browser';

//Request vers l'api
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // Gestion du routage
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

import { HomeComponent } from './home/home.component';
import { MushroomsComponent } from './mushroom/mushrooms/mushrooms.component';
import { ForumComponent } from './forum/forum.component';

import { MushromComponent } from './mushroom/mushroom/mushroom.component';
import { NotFoundComponent } from './page-error/not-found/not-found.component';
import { AuthenticateComponent } from './security/authenticate/authenticate.component';

import { DashboardComponent } from './authenticated_acces/dashboard/dashboard.component';
import { ListMushroomComponent } from './authenticated_acces/admin/mushroom/list-mushroom/list-mushroom.component';
import { DetailMushroomComponent } from './authenticated_acces/admin/mushroom/detail-mushroom/detail-mushroom.component';
import { FormMushroomComponent } from './authenticated_acces/admin/mushroom/form-mushroom/form-mushroom.component';
import { FormMediaComponent } from './authenticated_acces/admin/media/form-media/form-media.component';
import { ListMediaComponent } from './authenticated_acces/admin/media/list-media/list-media.component';
import { AddMediaComponent } from './authenticated_acces/admin/media/add-media/add-media.component';
import { AddLocalnameComponent } from './authenticated_acces/admin/localname/add-localname/add-localname.component';
import { EdibilitiesComponent } from './authenticated_acces/admin/edibility/edibilities/edibilities.component';
import { FormEdibilityComponent } from './authenticated_acces/admin/edibility/form-edibility/form-edibility.component';
import { ProfilComponent } from './authenticated_acces/user/profil/profil.component';
import { EditerProfilComponent } from './authenticated_acces/user/editer-profil/editer-profil.component';
import { EditerPasswordComponent } from './authenticated_acces/user/editer-password/editer-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MushroomsComponent,
    CardComponent,
    FooterComponent,
    ForumComponent,
    FormMushroomComponent,
    ListMushroomComponent,
    FormMediaComponent,
    ListMediaComponent,
    MushromComponent,
    DashboardComponent,
    NotFoundComponent,
    DetailMushroomComponent,
    AddMediaComponent,
    AuthenticateComponent,
    AddLocalnameComponent,
    EdibilitiesComponent,
    FormEdibilityComponent,
    ProfilComponent,
    EditerProfilComponent,
    EditerPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
