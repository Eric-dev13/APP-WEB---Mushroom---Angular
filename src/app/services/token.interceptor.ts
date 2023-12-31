import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* 
      Vérifiez si l'URL du Back-end (route dans l'API) contient le segment "api/v1/forum"
      request.url.includes('api/v1/forum')

      Vérifiez si l'URL dans angular (routes interne) contient le segment "back-office"
      this.router.url.includes('back-office')
    */

      const urlInterne = this.router.url;
      const urlDistante = request.url;

    if (urlInterne.includes('back-office') || (urlDistante.includes('api/v1/forum') && request.method != 'GET' )) {
      // Récupération du token d'authentification
      const token: string | null = this.auth.getToken();
      // Ajout du token dans les entêtes de la requête
      request = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }
    // Envoi de la requête avec les nouvelles entêtes
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorCode = error.status; // Récupérer le code d'erreur HTTP

        // Gestion du code d'erreur
        console.log(`Code d'erreur HTTP : ${errorCode}`);

        if (errorCode === 403) {
          // this.auth.doLogout(); 
          // redirect vers login
          this.router.navigate(["securite/authentification"]);
        }

        if (errorCode === 400) {
          console.log(error.error);
        }

        // Propager l'erreur pour qu'elle soit gérée ailleurs dans l'application
        return throwError(() => error);
      })
    );
  }

}
