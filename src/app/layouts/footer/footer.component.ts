import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  faHandPointUp = faHandPointUp;

  constructor(protected authenticated: AuthenticationService) { }

  // Deconnexion
  logout() {
    this.authenticated.doLogout();
  }
}
