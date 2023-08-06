import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTrash, faCircleInfo, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URL, API_ADMIN_BASE_URL, API_URL_GET_FILE_MUSHROOM } from '../../../../environments/config'

@Component({
  selector: 'app-detail-mushroom',
  templateUrl: './detail-mushroom.component.html',
  styleUrls: ['./detail-mushroom.component.scss']
})
export class DetailMushroomComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  faEdit = faEdit;
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faRotateLeft = faRotateLeft;


  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly API_URL_GET_FILE_MUSHROOM: string = API_URL_GET_FILE_MUSHROOM;
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;

  // Variables
  slug_mushroom: any;
  mushroom: any;
  id_mushroom: any;

  ngOnInit(): void {
    // Récupérer le paramètre 'slug' de l'URL et le transmets à l'api qui renvoie les infos détaillées.
    // this.slug_mushroom = this.route.snapshot.paramMap.get('slug');
    // if (this.slug_mushroom) {
    //   //Le paramètre est une chaîne de caractères (slug)
    //   console.log('Paramètre slug:', this.slug_mushroom);
    //   // Traitement GET : findBySlug
    //   this.http.get(this.API_BASE_URL + "mushroom/findBySlug/" + this.slug_mushroom).subscribe((res) => {
    //     this.mushroom = res;
    //     console.log(this.mushroom);
    //   });
    // }

    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
      //Le paramètre est une chaîne de caractères (slug)
      console.log('Paramètre id:', this.id_mushroom);
      // Traitement GET : findBySlug
      this.http.get(this.API_BASE_URL + "mushroom/" + this.id_mushroom).subscribe((res) => {
        this.mushroom = res;
        console.log(this.mushroom);
      });
    }
  }

  delete(id: any) {
    // Traitement DELETE
    this.http.delete(this.API_ADMIN_BASE_URL + "mushroom/" + id).subscribe((res) => {
      this.mushroom = res;
      console.log(this.mushroom);
    });
  }
}

