import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_URL_GET_FILE_MUSHROOM, API_URL_GET_FILE } from '../../../environments/config';

@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // mushroomsUrlApi: string = "http://localhost:9000/api/v1/mushroom/field-selected";

  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly API_URL_GET_FILE: string = API_URL_GET_FILE + 'mushrooms/'
  readonly API_URL_GET_FILE_MUSHROOM: string = API_URL_GET_FILE_MUSHROOM;

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
