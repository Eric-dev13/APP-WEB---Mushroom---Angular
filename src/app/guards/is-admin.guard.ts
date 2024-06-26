import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TypeAlert } from 'src/app/enum/type-alert';
import { ToastService } from 'src/app/services/toast-service';


export const isAdminGuard: CanActivateFn = () => {

  if (inject(AuthenticationService).isAdmin()) {
    return true;
  }
  inject(ToastService).showToast("Acces refusé", "Désolé, vous ne disposez pas des autorisations nécessaires pour accéder à ces informations, role admin attendu !", TypeAlert.DANGER, "5000");
  console.log("Désolé, vous ne disposez pas des autorisations nécessaires pour accéder à ces informations, role admin attendu !");
  inject(Router).navigate(["securite/authentification"]);
  return false;
}



