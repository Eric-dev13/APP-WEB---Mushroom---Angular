import { Component, OnInit } from '@angular/core';
import { PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { MushroomService } from 'src/app/services/mushroom.service';
import { Mushroom } from 'src/app/interfaces/mushroom.interface';
import { Mushrooms } from 'src/app/interfaces/mushrooms.interface';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // Déclaration de constantes
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft ;

  mushrooms: Mushroom[] = [];

  currentPage: number = 1;    // Page courante
  itemsPerPage: number = 10;  // Nombre d'enregistrement par page = limit
  totalItems: number = 0;     // Nombre Total d'enregistrement
  offset!: number;            // numero de l'enregistrement

  constructor(private mushroomService: MushroomService) { }

  ngOnInit(): void {
    this.getMushrooms();
  }


  public getMushrooms = () => {
    this.setOffset();
    console.log("limit: ", this.itemsPerPage, "offset: ", this.offset);

    this.mushroomService.findAllFilter(this.itemsPerPage, this.offset).subscribe({
      next: (data: Mushrooms) => {
        this.mushrooms = data.mushrooms;
        this.totalItems = data.totalMushroom;
      },
      error: (err) => console.log('Observer got an error: ', err.error),
      complete: () => console.table(`Liste de ${this.itemsPerPage} champignon(s) sur un total de ${this.totalItems}.`),
    });
  }
  

  getTotalPages = ():number => {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  setOffset = ():void => {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
  }

  show =(page: number) => {
    this.currentPage = page;
    this.getMushrooms();
  }

  // PREVIOUS
  btnPreviousPageEnabled = ():string => {
    return (this.currentPage - 1) < 1 ? 'disabled' : '';
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage  = this.currentPage-1 ;
      this.getMushrooms();
    }
  }

  // NEXT
  btnNextPageEnabled = ():string => {
    return (this.currentPage + 1) > this.getTotalPages() ? 'disabled' : '';
  }

  nextPage():void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage = this.currentPage+1;
      this.getMushrooms();
    }
  }


  pageExist = (page: number):boolean => {
    // console.log("totalItems", this.totalItems,"page",page ,"result", page > this.totalItems );
    return page < this.getTotalPages();
  }

  
  // previousPageExist = ():string => {
  //   return (this.currentPage - 1) < 0 ? 'disabled' : '';
  // }


  // public findAll = () => {
  //   this.mushroomService.findAll().subscribe({
  //     next: (data) => this.mushrooms = data,
  //     error: (err) => console.log('Observer got an error: ', err.error),
  //     complete: () => console.table(this.mushrooms),
  //   })
  // }

}



