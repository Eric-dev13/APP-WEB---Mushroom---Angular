import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = () => {
  console.log("Désolé vous devez vous authentifier !")
  if(inject(AuthenticationService).isAuth()){
    return true;
  }
  inject(Router).navigate(["securite/authentification"]);
  return false;
};
