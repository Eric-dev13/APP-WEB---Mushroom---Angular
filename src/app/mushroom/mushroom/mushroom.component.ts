import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { API_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY, PUBLIC_URL_GET_FILE_LAMELLATYPE } from '../../../environments/config';


@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.scss']
})
export class MushromComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;
  readonly PUBLIC_URL_GET_FILE_LAMELLATYPE: string = PUBLIC_URL_GET_FILE_LAMELLATYPE


  // Variables
  slug_mushroom: any;
  mushroom: any;
  id_mushroom: any;

  ngOnInit() {
    // Récupérer le paramètre 'id' de l'URL
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
        // Le paramètre est un nombre (id)
        console.log('Paramètre id:', this.id_mushroom);
        // Traitement - GET : findById
        this.http.get(this.API_BASE_URL + "mushroom/" + this.id_mushroom).subscribe((res) => {
          this.mushroom = res;
          console.log(this.mushroom);
        });
      }

    // Récupérer le paramètre 'slug' de l'URL et le transmets à l'api qui renvoie les infos détaillées.
  //  this.slug_mushroom = this.route.snapshot.paramMap.get('slug');
  //  if (this.slug_mushroom) {
  //   // Le paramètre est une chaîne de caractères (slug)
  //   console.log('Paramètre slug:', this.slug_mushroom);
  //   // Traitement GET : findBySlug
  //   this.http.get(this.API_BASE_URL + "mushroom/findBySlug/" + this.slug_mushroom).subscribe((res) => {
  //     this.mushroom = res;
  //     console.log(this.mushroom);
  //   });
  // }
   
  }

}
