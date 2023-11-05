import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// REQUETE et INTERCEPTEUR
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from 'src/app/services/token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
})
export class AuthenticationModule { }
