import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/pages/authentication/user/user.interface';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{

  constructor(private userService: UserService){ }

  readonly PUBLIC_URL_GET_FILE_USER: string = environment.PUBLIC_URL_GET_FILE_USER;

  user!: User;

  ngOnInit(): void {
    this.getProfilCurrentUser();
  }

  getProfilCurrentUser = () => {
    this.userService.getProfilCurrentUser().subscribe({
      next: (data) => {
        // console.table(data),
        this.user = data
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Affichage de votre profil')
    })
  }

}
