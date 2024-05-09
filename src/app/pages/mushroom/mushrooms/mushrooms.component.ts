import { Component, OnInit } from '@angular/core';
// import { PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { environment } from 'src/environments/environment';
import { MushroomService } from 'src/app/services/mushroom.service';
import { MushroomsPaginator } from 'src/app/interfaces/mushroomsPaginator.interface';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Paginator } from 'src/app/interfaces/paginator.interface';


@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // Déclaration de constantes
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = environment.PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = environment.PUBLIC_URL_GET_FILE_EDIBILITY;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  // PAGINATOR
  mushroomsPaginator: MushroomsPaginator =  { mushrooms: [], totalMushroom: 0 };
  paginator: Paginator = {
    currentPage: 1,     // Page courante
    itemsPerPage: 10,   // Nombre d'enregistrement par page = limit
    totalItems: 0,      // Nombre Total d'enregistrement
    offset: 0           // numero de l'enregistrement
  }
  // **********

  constructor(private mushroomService: MushroomService) { }

  ngOnInit(): void {
    this.show();
  }

  public getMushrooms = () => {
    this.mushroomService.findAllByVisibilityPaginate(this.paginator.itemsPerPage, this.paginator.offset).subscribe({
      next: (data: MushroomsPaginator) => {
        this.mushroomsPaginator = data;
        this.paginator.totalItems = data.totalMushroom;
      },
      error: (err) => console.log('Observer got an error: ', err.error),
      complete: () => console.table(`Liste de ${this.paginator.itemsPerPage} champignon(s) sur un total de ${this.paginator.totalItems}.`),
    });
  }

  // *****************************************************
  // ********************  PAGINATOR  ********************
  // *****************************************************
  show = () => {
    this.paginator.offset = (this.paginator.currentPage - 1) * this.paginator.itemsPerPage;
    console.log("limit: ", this.paginator.itemsPerPage, "offset: ", this.paginator.offset);
    this.getMushrooms();
  }

  getTotalPages = ():number => {
    return Math.ceil(this.paginator.totalItems / this.paginator.itemsPerPage);
  }

  // PREVIOUS : Vérification si le bouton "Précédent" doit être désactivé
  isPreviousPageDisabled = ():string => {
    return (this.paginator.currentPage - 1) < 1 ? 'disabled' : '';
  }

  // BTN PREVIOUS : Gestion du bouton "Précédent"
  previousPage(): void {
    if (this.paginator.currentPage > 1) {
      this.paginator.currentPage  = this.paginator.currentPage - 1 ;
      this.show();
    }
  }

   // NEXT : Vérification si le bouton "Suivant" doit être désactivé
  isNextPageDisabled = ():string => {
    return (this.paginator.currentPage + 1) > this.getTotalPages() ? 'disabled' : '';
  }

 // BTN NEXT : Gestion du bouton "Suivant"
  nextPage():void {
    if (this.paginator.currentPage < this.getTotalPages()) {
      this.paginator.currentPage = this.paginator.currentPage + 1;
      this.show();
    }
  }

  pageExist = (page: number):boolean => {
    return page < this.getTotalPages();
  }


}



