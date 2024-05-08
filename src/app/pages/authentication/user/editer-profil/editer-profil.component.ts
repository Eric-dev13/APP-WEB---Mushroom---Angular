import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/pages/authentication/user/user.interface';
import { NgForm } from '@angular/forms';
// import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserSessionStorage } from 'src/app/interfaces/user-session-storage.interface';

@Component({
  selector: 'app-editer-profil',
  templateUrl: './editer-profil.component.html',
  styleUrls: ['./editer-profil.component.scss']
})
export class EditerProfilComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private router: Router,
    private auth: AuthenticationService
  ) { }

  readonly PUBLIC_URL_GET_FILE_USER: string = environment.PUBLIC_URL_GET_FILE_USER;

  // Avatar
  selectedFile!: File;
  selectedImage: any;

  // current user
  user: User = {
    updatedAt: new Date(),
    pseudo: '',
    email: ''
  }


  ngOnInit(): void {
    this.userService.getProfilCurrentUser().subscribe({
      next: (data) => {
        this.user = data 
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('current user ok')
    })
  }

  onFileSelected = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files) {
      this.selectedFile = files[0];
      this.selectedImage = URL.createObjectURL(this.selectedFile); // Crée l'URL pour l'image sélectionnée
    }
  }

  send = (form: NgForm) => {
    // CREE UNE INSTANCE DE FORM DATA POUR PREPARER LA REQUETE MULTIPART
    const formData: FormData = new FormData();
    formData.append("pseudo", form.value.pseudo);
    formData.append("lastname", form.value.lastname);
    formData.append("firstname", form.value.firstname);
    formData.append("filename", this.selectedFile);


    // ATTENTION PAS DE CONTENT-TYPE:application/json DANS L'INTERCEPTOR SINON ERREUR 400 !!!!!!
    this.userService.updateProfilCurrentUser(this.user.id, formData).subscribe({
      next: (userSession: UserSessionStorage) => {
        if (userSession) {
          console.table(userSession);
          // j'actualise les infos de user dans session storage
          this.auth.setUser(userSession);

          // redirige vers la liste
          this.router.navigate(["/back-office/utilisateur/profil"]);
        }
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Modification réussie!')
    })
  }
}



