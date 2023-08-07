import { NgModule } from '@angular/core'; // 
import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Gestion du routage
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MushroomsComponent } from './mushroom/mushrooms/mushrooms.component';
import { CardComponent } from './card/card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ForumComponent } from './forum/forum.component';

//Request vers l'api
import { HttpClientModule } from '@angular/common/http';
import { FormMushroomComponent } from './admin/mushroom/form-mushroom/form-mushroom.component';
import { ListMushroomComponent } from './admin/mushroom/list-mushroom/list-mushroom.component';
import { FormMediaComponent } from './admin/media/form-media/form-media.component';
import { ListMediaComponent } from './admin/media/list-media/list-media.component';
import { MushromComponent } from './mushroom/mushroom/mushroom.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotFoundComponent } from './page-error/not-found/not-found.component';
import { DetailMushroomComponent } from './admin/mushroom/detail-mushroom/detail-mushroom.component';
import { AddMediaComponent } from './admin/media/add-media/add-media.component';
import { RegisterComponent } from './security/register/register.component';
import { LoginComponent } from './security/login/login.component';

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
    RegisterComponent,
    LoginComponent
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
