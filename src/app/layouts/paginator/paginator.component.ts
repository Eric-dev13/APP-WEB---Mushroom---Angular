import { Component } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  currentPage: number = 1;    // Page courante
  itemsPerPage: number = 10;  // Nombre d'enregistrement par page = limit
  totalItems: number = 0;     // Nombre Total d'enregistrement
  offset!: number;            // numero de l'enregistrement

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft ;

  getTotalPages = ():number => {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  setOffset = ():void => {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
  }

  show =(page: number) => {
    this.currentPage = page;
    //this.getMushrooms();
  }

  // PREVIOUS
  btnPreviousPageEnabled = ():string => {
    return (this.currentPage - 1) < 1 ? 'disabled' : '';
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage  = this.currentPage-1 ;
      //this.getMushrooms();
    }
  }

  // NEXT
  btnNextPageEnabled = ():string => {
    return (this.currentPage + 1) > this.getTotalPages() ? 'disabled' : '';
  }

  nextPage():void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage = this.currentPage+1;
      //this.getMushrooms();
    }
  }


  pageExist = (page: number):boolean => {
    // console.log("totalItems", this.totalItems,"page",page ,"result", page > this.totalItems );
    return page < this.getTotalPages();
  }
}
