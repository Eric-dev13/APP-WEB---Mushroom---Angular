import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Paginator } from 'src/app/interfaces/paginator.interface';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  // Définition des icônes FontAwesome
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  // Définition du paginator avec des valeurs par défaut
  paginator: Paginator = {
    currentPage: 1,     // Page courante
    itemsPerPage: 10,   // Nombre d'enregistrement par page = limit
    totalItems: 0,      // Nombre Total d'enregistrements
    offset: 0           // numéro de l'enregistrement
  }

  // EMETTRE : Émission d'un événement vers le parent
  @Output() paginationSettings: EventEmitter<Paginator> = new EventEmitter<Paginator>();

  // RECEVOIR : Réception des propriétés du parent
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;

  // Actualise le composant si un changement sur un @input est capturé 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changement");
    // console.log("changes", changes);
    const totalItemsChange = changes['totalItems'];
    if (totalItemsChange) {
      //console.log('Données du parent disponibles :', this.totalItems);
      this.paginator.totalItems = this.totalItems;
      this.paginator.itemsPerPage = this.itemsPerPage;
    }
  }

  // Calcul du nombre total de pages
  getTotalPages = (): number => {
    return Math.ceil(this.paginator.totalItems / this.paginator.itemsPerPage);
  }

  // PREVIOUS : Vérification si le bouton "Précédent" doit être désactivé
  isPreviousPageDisabled = (): string => {
    // console.log("isPreviousPageDisabled");
    return (this.paginator.currentPage - 1) < 1 ? 'disabled' : '';
  }

  // BTN PREVIOUS : Gestion du bouton "Précédent"
  previousPage(): void {
    if (this.paginator.currentPage > 1) {
      this.paginator.currentPage = this.paginator.currentPage - 1;
      this.changePageEmitter();
    }
  }

  // NEXT : Vérification si le bouton "Suivant" doit être désactivé
  isNextPageDisabled = (): string => {
    return (this.paginator.currentPage + 1) > this.getTotalPages() ? 'disabled' : '';
  }

  // BTN NEXT : Gestion du bouton "Suivant"
  nextPage(): void {
    if (this.paginator.currentPage < this.getTotalPages()) {
      this.paginator.currentPage = this.paginator.currentPage + 1;
      this.changePageEmitter();
    }
  }

  // EMISSION DES DONNEES DE L'ENFANT VERS LE PARENT
  changePageEmitter = () => {
    // Met à jour la propriété totalItems du paginator 
    this.paginator.totalItems = this.totalItems;

    // Calcule le nouvel offset
    this.paginator.offset = (this.paginator.currentPage - 1) * this.paginator.itemsPerPage;

    // Émet l'objet paginator à travers l'événement paginationSettings
    this.paginationSettings.emit(this.paginator);
  }
}
