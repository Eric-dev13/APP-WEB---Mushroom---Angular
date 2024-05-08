import { NgModule } from '@angular/core'; // 
import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel
import { BrowserModule } from '@angular/platform-browser';

// REQUETE et INTERCEPTEUR
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';

// ROUTING URL
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';

//  AFFICHER DES MESSAGES DE NOTIFICATION


// PAGES ERROR
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

// PAGES
import { HomeComponent } from './pages/home/home.component';

// LOGIN
import { AuthenticateComponent } from './pages/security/authenticate/authenticate.component';

// PAGES SECURISEE
import { DashboardComponent } from './pages/authentication/dashboard/dashboard.component';
import { ProfilComponent } from './pages/authentication/user/profil/profil.component';
import { EditerProfilComponent } from './pages/authentication/user/editer-profil/editer-profil.component';
import { EditerPasswordComponent } from './pages/authentication/user/editer-password/editer-password.component';

import { ListMushroomComponent } from './pages/authentication/admin/mushroom/list-mushroom/list-mushroom.component';
import { DetailMushroomComponent } from './pages/authentication/admin/mushroom/detail-mushroom/detail-mushroom.component';
import { FormMushroomComponent } from './pages/authentication/admin/mushroom/form-mushroom/form-mushroom.component';

import { FormMediaComponent } from './pages/authentication/admin/media/form-media/form-media.component';
import { ListMediaComponent } from './pages/authentication/admin/media/list-media/list-media.component';
import { AddMediaComponent } from './pages/authentication/admin/media/add-media/add-media.component';

import { AddLocalnameComponent } from './pages/authentication/admin/localname/add-localname/add-localname.component';

import { EdibilitiesComponent } from './pages/authentication/admin/edibility/edibilities/edibilities.component';
import { FormEdibilityComponent } from './pages/authentication/admin/edibility/form-edibility/form-edibility.component';

import { SubjectsComponent } from './pages/forum/subjects/subjects.component';
import { CharteComponent } from './pages/forum/charte/charte.component';

import { PaginatorComponent } from './layouts/paginator/paginator.component';
import { ActualiteComponent } from './pages/actualite/actualite/actualite.component'; 

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CategoryComponent } from './pages/authentication/admin/forum/category/category.component';
import { ConfirmationModalComponent } from './layouts/confirmation-modal/confirmation-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './layouts/toast/toast.component';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { SubjectComponent } from './components/subject/subject.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FormMushroomComponent,
    ListMushroomComponent,
    DetailMushroomComponent,
    FormMediaComponent,
    ListMediaComponent,
    DashboardComponent,
    NotFoundComponent,
    AddMediaComponent,
    AuthenticateComponent,
    AddLocalnameComponent,
    EdibilitiesComponent,
    FormEdibilityComponent,
    ProfilComponent,
    EditerProfilComponent,
    EditerPasswordComponent,
    SubjectsComponent,
    CharteComponent,
    PaginatorComponent,
    ActualiteComponent,
    CategoryComponent,
    ConfirmationModalComponent,
    ToastComponent,
    CommentaryComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
