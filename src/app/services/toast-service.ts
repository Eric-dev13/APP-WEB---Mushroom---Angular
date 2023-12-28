import { Injectable } from '@angular/core';
import { TypeAlert } from '../enum/type-alert';
import { ToastComponent } from '../layouts/toast/toast.component';


@Injectable({ providedIn: 'root' })
export class ToastService {

	private toastComponent!: ToastComponent;

	setToastComponent(toast: ToastComponent): void {
		this.toastComponent = toast;
	}

	getToastComponent(): ToastComponent {
		return this.toastComponent;
	}

	showToast = (title: string, message: string, typeAlert: TypeAlert, delay: string) => {
		if (this.toastComponent) {
			this.toastComponent.toast = {
				showStateToast: 'show',
				title: title,
				message: message,
				typeAlert: typeAlert
			}
			// Masquer le toast après un délai
			this.hideToast(delay);
		} else {
			console.error('Le composant de toast n\'est pas correctement initialisé dans le service.');
		}
	}

	hideToast = (delay:string) => {
		// Optionnel : Masquer le toast après un délai
		setTimeout(() => {
			this.toastComponent.toast.showStateToast = 'hide';
		}, parseInt(delay));
	}

	/* JAVASCRIPT VANILLA */
	// showExpiredSessionToast = (title: string, message: string, typeAlert: TypeAlert, delai: number) => {
	// 	const toastElement = document.getElementById('messageToast');
	// 	console.log("Execute toast");

	// 	if (toastElement) {

	// 		const titre = document.querySelector('#toastTitle');
	// 		if (titre) {
	// 			console.log("title");
	// 			titre.innerHTML = title;
	// 		}

	// 		const alertMessage = document.querySelector('#bodyToast');
	// 		if (alertMessage) {
	// 			console.log("alert message");
	// 			alertMessage.innerHTML = message;
	// 		}

	// 		// stylise le taost
	// 		console.log("class", typeAlert);

	// 		toastElement.classList.add(typeAlert);

	// 		// Afficher le toast
	// 		toastElement.classList.add('show');

	// 		// Optionnel : Masquer le toast après un délai
	// 		setTimeout(() => {
	// 			toastElement.classList.remove('show');
	// 		}, delai);
	// 	}
	// }
}