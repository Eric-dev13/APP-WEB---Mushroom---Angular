import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faCircleInfo, faThumbsUp, faThumbsDown, faEye, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { MushroomAdminService } from 'src/app/services/mushroom.service';
import { Paginator } from 'src/app/interfaces/paginator.interface';
import { MushroomsPaginator } from 'src/app/interfaces/mushroomsPaginator.interface';



@Component({
  selector: 'app-list-mushroom',
  templateUrl: './list-mushroom.component.html',
  styleUrls: ['./list-mushroom.component.scss']
})
export class ListMushroomComponent implements OnInit {

  constructor(
    private mushroomAdminService: MushroomAdminService
    ) { }

  faEdit = faEdit;
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faEye = faEye;
  faSquarePlus = faSquarePlus;

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;

  // Configuration de la pagination : nombre d'élément par page
  itemsPerPage: number = 5;

  // Objet pour stocker les données paginées
  mushroomsPaginate: MushroomsPaginator = { mushrooms: [], totalMushroom: 0 };

  ngOnInit(): void {
    //console.log( "Initialisation du composant PARENT");
    // Charger les données initiales
    this.findAll(this.itemsPerPage, 0);
  }

  // Ecoute les changements du paginator (si click sur le btn next ou previous)
  handlePaginationEvent = (paginator: Paginator) => {
    //console.log("click sur le btn precedent ou suivant = Event", paginator);
    this.findAll(paginator.itemsPerPage, paginator.offset);
  }

  // Méthode pour récupérer les données paginées
  findAll(limit?:number, offset?:number) {
    // console.log("envoie le requete");
    this.mushroomAdminService.findAllPaginate(limit, offset).subscribe({
      next: (data) => {
        // Retourne la liste et le nombre total d'enregistrements.
        this.mushroomsPaginate = data;
      },
      error: (err) => console.log(),
      complete: () => console.log(),
    });
  }

  // Inverser la valeur de mushroom.visibility
  activate(id: any) {
    this.mushroomAdminService.invertVisibility(id).subscribe({
      next: (data) => this.findAll(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Modification effectué')
    })
  }

  // Méthode pour supprimer un enregistrement
  delete(id: any) {
    // DELETE
    this.mushroomAdminService.delete(id).subscribe({
      next: (data) => this.findAll(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('L\'enregistrement a été supprimé')
    });
  }

}
