import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(protected authenticated: AuthenticationService) { }

  // Deconnexion
  logout() {
    this.authenticated.doLogout();
  }
}
