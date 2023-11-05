import { Component, OnInit } from '@angular/core';
import { PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { MushroomService } from 'src/app/services/mushroom.service';
import {Mushroom} from 'src/app/interfaces/mushroom.interface';
 

@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // Déclaration de constantes
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;


  // mushrooms!: any;
  mushrooms: Mushroom[] = [];

  constructor(private mushroomService: MushroomService) { }

  ngOnInit(): void {
    // GET :  findAll
    this.mushroomService.findAll().subscribe((data) => {
      this.mushrooms = data;
      console.table(this.mushrooms);
    });
  }

}
