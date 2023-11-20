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
    // Récupérez l'URL actuelle
    const currentUrl: string = this.router.url;

    // Vérifiez si l'URL dans angular contient le segment "back-office"
    if (currentUrl.includes('back-office')) {
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
