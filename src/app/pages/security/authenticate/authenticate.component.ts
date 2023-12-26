import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL_AUTH } from '../../../../environments/config';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/services/toast-service';
import { TypeAlert } from 'src/app/enum/type-alert';
import { ToastComponent } from 'src/app/layouts/toast/toast.component';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent{

  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;

  // Déclaration de constantes
  readonly API_URL_AUTH: string = API_URL_AUTH;

  messageToast: ToastComponent;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    protected authenticationService: AuthenticationService,
    private toastService: ToastService
    ) {
      this.messageToast = this.toastService.getToastComponent();
    }

  errors: { [key: string]: string } = {};


  loggedIn = (formAuth: NgForm) => {
    // POST :  Si l'utilisateur est enregistrer dans la base de données le serveur lui renverra un token
    // a chaque fois que l'on souhaite acceder a une route privée on dois envoyer le token
    // le serveur decode le token verifie la validité de la signature puis renvoie les infos demandées
    if (formAuth.valid) {
      this.authenticationService.loggedIn(formAuth).subscribe({
        next: (data) => {
          this.toastService.showToast("LOGIN", "Authentification réussie. Accès autorisé.", TypeAlert.SUCCESS, "2000");
          // console.log('Utilisateur: ', data.user);
          // console.log('token: ', data.token);
          // console.log('token: ', data);
          // Enregistre le token et redirige vers la page d'acceuil
          this.authenticationService.doLogged(data);
        },
        error: (errors: Error) => {
          // console.log('Observer got an error: ' + err);
          // Gestion des erreurs de validation provenat de l'API
          this.checkDataConstraints(errors);
        },
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  registration = (formRegister: NgForm) => {
    // POST :  findAll
    console.log(formRegister.value);
    if (formRegister.valid) {
      this.authenticationService.registration(formRegister).subscribe({
        next: (data) => {
          this.toastService.showToast("INSCRIPTION", `Bienvenue ${formRegister.value.email} !`, TypeAlert.SUCCESS, "2000");
          // console.log('Utilisateur: ', data.user);
          // console.log('token: ', data.token);
          // Enregistre le token et redirige vers la page d'acceuil
          this.authenticationService.doLogged(data);
        },
        error: (errors: Error) => {
          //console.log('Observer got an error: ', errors);
          this.checkDataConstraints(errors);
        },
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          // errors: { [key: string]: string } = {};
          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }

  // Vide la liste d'erreurs.
  emptyErrors = (): void => {
    this.errors = {};
  }

} 
