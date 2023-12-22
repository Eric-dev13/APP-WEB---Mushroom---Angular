import { Component, EventEmitter, inject, Output, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-confirmation-modal',
	templateUrl: './confirmation-modal.component.html',
	styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

	private modalService = inject(NgbModal);
	ModalResult = '';
	faTrash = faTrash;

	// EMETTRE : Émission d'un événement de l'enfant vers le parent
	@Output() ModalChoice: EventEmitter<string> = new EventEmitter<string>();

	//  méthode pour ouvrir le dialogue modal.
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				if (result === 'confirm') {
					// L'utilisateur a cliqué sur Confirmer
					// Émet le message
    				this.ModalChoice.emit('confirm');
				}
				this.ModalResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.ModalResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
