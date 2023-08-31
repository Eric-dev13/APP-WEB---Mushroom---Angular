import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL_AUTH } from '../../../environments/config';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  // Déclaration de constantes
  readonly API_URL_AUTH: string = API_URL_AUTH;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    protected authentication: AuthenticationService) { }

  /*
  S'enregistrer server renvoi un token
  On enregistre dans le local storage
  Si on accede a des route securisée on envoie notre token
  Verifier si on possede un token is_auth
  Tester la validité du token 

  */

  currentUser = {};

  access_token!: any;

  is_auth!: boolean;

  userDetail: any;

  userRegistration: any = {
    "pseudo": "Luke",
    "firstname": "Luke",
    "lastname": "Skywalker",
    "email": "skywalker@gmail.com",
    "password": "1234",
    "avatar": "asssets/ronaldo.jpg"
  }

  userAuthentication: any = {
    "pseudo": "ricou",
    "email": "lanzae32@gmail.com",
    "password": "1234"
  }


  ngOnInit(): void { }


  loggedIn(formAuth: NgForm) {
    // POST :  Si l'utilisateur est enregistrer dans la base de données le serveur lui renverra un token
    // a chaque fois que l'on souhaite acceder a une route privée on dois envoyer le token
    // le serveur decode le token verifie la validité de la signature puis renvoie les infos demandées
    if (formAuth.valid) {
      this.http.post<any>(this.API_URL_AUTH + "authenticate", formAuth.value).subscribe((res) => {
        // Enregistre le token et redirige vers la page d'acceuil
        this.authentication.doLogged(res.token);
      });
    }
  }

  registration(formRegister: NgForm) {
    // POST :  findAll
    if (formRegister.valid) {
      this.http.post<any>(this.API_URL_AUTH + "register", formRegister.value).subscribe((res) => {
         // Envoi l'email et password pour l'inscription puis stocke en retour le token et enfin redirige vers la page d'acceuil
         this.authentication.doLogged(res.token);
      });
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => msg);
  }


}
