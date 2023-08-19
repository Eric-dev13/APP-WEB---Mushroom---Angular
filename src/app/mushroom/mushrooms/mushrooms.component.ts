import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from '../../../environments/config';
 
@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;


  mushrooms: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // GET :  findAll
    this.http.get(this.API_BASE_URL + "mushroom").subscribe((res) => {
      this.mushrooms = res;
      console.log(this.mushrooms);
    });
  }

}
