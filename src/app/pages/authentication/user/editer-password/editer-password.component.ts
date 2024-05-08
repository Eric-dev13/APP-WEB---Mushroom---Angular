import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editer-password',
  templateUrl: './editer-password.component.html',
  styleUrls: ['./editer-password.component.scss']
})
export class EditerPasswordComponent {

  constructor(
    private userService: UserService, 
    private router: Router
  ) { }


  faEye = faEye;
  faEyeSlash = faEyeSlash;

  isUpdate: boolean = false;

  errorPassword: boolean = false;

  errors: { [key: string]: string } = {};


  togglePasswordVisibility = (elementId: string) => {
    const passwordInput = document.getElementById(elementId);

    if (passwordInput) {
      const currentType = passwordInput.getAttribute("type");
      const newType = currentType === "password" ? "text" : "password";
      passwordInput.setAttribute("type", newType);
    }
  }

  send = (form: NgForm) => {
    if (form.value.newPassword === form.value.confirmNewPassword) {
      this.userService.updatePassword(form).subscribe({
        next: (data: boolean) => {
          this.isUpdate = data;
           // redirige vers la liste
           this.router.navigate(["/back-office/utilisateur/profil"]);
        },
        error: (errors :Error) => {
           // Gestion des erreurs de validation provenat de l'API
           this.checkDataConstraints(errors);
        },
        complete: () => this.errorPassword = false
    });
    } else {
      this.errorPassword = true;
    }
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }

  emptyErrors = (): void => {
    this.errors = {};
  }

}
