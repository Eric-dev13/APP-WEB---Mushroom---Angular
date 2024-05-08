import { Component, OnInit, Input } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';
// import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  readonly PUBLIC_URL_GET_FILE_USER = environment.PUBLIC_URL_GET_FILE_USER; //constante d'environnement
  faAlignJustify = faAlignJustify; // icon Font Awesome

  constructor(protected authenticated: AuthenticationService) { }

  ngOnInit(): void {}

  // Deconnexion
  logout(){
    this.authenticated.doLogout();
  }

}
