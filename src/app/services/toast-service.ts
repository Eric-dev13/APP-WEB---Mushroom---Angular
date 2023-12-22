import { Injectable, TemplateRef } from '@angular/core';
import { TypeAlert } from '../enum/type-alert';


@Injectable({ providedIn: 'root' })
export class ToastService {

	showExpiredSessionToast = (title:string, message:string, typeAlert: TypeAlert, delai: number) => {
  
		const toastElement = document.getElementById('messageToast');
		console.log("Execute toast");
		
		if (toastElement) {   
	  
		  const titre = document.querySelector('#toastTitle');
		  if(titre) {
			console.log("title");
			titre.innerHTML = title;
		  }
	  
		  const alertMessage = document.querySelector('#bodyToast');
		  if(alertMessage) {
			console.log("alert message");
			alertMessage.innerHTML = message;
		  }
	  
		  // stylise le taost
		  console.log("class",typeAlert);
		  
		  toastElement.classList.add(typeAlert);
	  
		  // Afficher le toast
		  toastElement.classList.add('show');
	  
		  // Optionnel : Masquer le toast après un délai
		  setTimeout(() => {
			toastElement.classList.remove('show');
		  }, delai);
		}
	  }
}