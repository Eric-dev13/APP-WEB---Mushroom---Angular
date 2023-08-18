import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTrash, faCircleInfo, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URL, API_ADMIN_BASE_URL, API_URL_GET_FILE_MUSHROOM, API_URL_GET_FILE_EDIBILITY } from '../../../../environments/config'

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
  readonly API_ADMIN_BASE_URL:string = API_ADMIN_BASE_URL;
  readonly API_URL_GET_FILE_MUSHROOM:string = API_URL_GET_FILE_MUSHROOM;
  readonly API_URL_GET_FILE_EDIBILITY: string = API_URL_GET_FILE_EDIBILITY;

  readonly headers:any  = { 'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` };

  // Variables
  slug_mushroom: any;
  mushroom: any;
  id_mushroom: any;

  ngOnInit(): void {
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
      //Le paramètre est une chaîne de caractères (slug)
      console.log('Paramètre id:', this.id_mushroom);
      // Traitement GET : findBySlug
      this.http.get(this.API_ADMIN_BASE_URL + "mushroom/" + this.id_mushroom).subscribe((res) => {
        this.mushroom = res;
        console.log("GET: ", this.mushroom);
      });
    }
  }

  delete(id: any) {
    // Traitement DELETE
    this.http.delete(this.API_ADMIN_BASE_URL + "mushroom/" + id).subscribe({
      next: () => {
        console.log('Champignon supprimée');
         // Redirige vers la liste
         this.router.navigate(["admin/champignon/Liste-des-champignons"]);
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }
}

