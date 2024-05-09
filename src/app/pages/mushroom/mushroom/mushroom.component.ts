import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY, PUBLIC_URL_GET_FILE_LAMELLATYPE } from 'src/environments/config';
import { environment } from 'src/environments/environment';
import { MushroomService } from 'src/app/services/mushroom.service';
import {Mushroom} from 'src/app/interfaces/mushroom.interface';


@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.scss']
})
export class MushromComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mushroomService: MushroomService
  ) { }

  // Déclaration de constantes
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = environment.PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = environment.PUBLIC_URL_GET_FILE_EDIBILITY;
  readonly PUBLIC_URL_GET_FILE_LAMELLATYPE: string = environment.PUBLIC_URL_GET_FILE_LAMELLATYPE


  // Variables
  mushroom!: Mushroom;
  id_mushroom: any;

  ngOnInit() {
    // Récupérer le paramètre 'id' de l'URL
    this.id_mushroom = this.route.snapshot.paramMap.get('id');

    if (this.id_mushroom) {
        // Traitement - GET : findById
        this.mushroomService.findById(this.id_mushroom).subscribe((data) => {
          this.mushroom = data;
          console.log(this.mushroom);
        });
      }
  }

}
