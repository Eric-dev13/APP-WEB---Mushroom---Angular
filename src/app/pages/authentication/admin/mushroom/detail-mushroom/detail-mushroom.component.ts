import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTrash, faCircleInfo, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
// import { API_ADMIN_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config'
import { environment } from 'src/environments/environment.development';
import { MushroomAdminService } from 'src/app/services/mushroom.service';
import { Mushroom } from 'src/app/interfaces/mushroom.interface';



@Component({
  selector: 'app-detail-mushroom',
  templateUrl: './detail-mushroom.component.html',
  styleUrls: ['./detail-mushroom.component.scss']
})
export class DetailMushroomComponent implements OnInit {

  constructor(
    private mushroomAdminService: MushroomAdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  faEdit = faEdit;
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faRotateLeft = faRotateLeft;


  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL:string = environment.API_ADMIN_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM:string = environment.PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = environment.PUBLIC_URL_GET_FILE_EDIBILITY;


  mushroom!: Mushroom;
  id_mushroom: any;

  ngOnInit(): void {
    this.id_mushroom = this.route.snapshot.paramMap.get('id');

    if (this.id_mushroom) {
      //Le paramètre est une chaîne de caractères (slug)
      console.log('Paramètre id:', this.id_mushroom);
      // FindById
      this.mushroomAdminService.findById(this.id_mushroom).subscribe((res) => {
        this.mushroom = res;
        console.log("GET: ", this.mushroom);
      });
    }
  }

  delete(id: any) {
    // DELETE
    this.mushroomAdminService.delete(id).subscribe({
      next: () => {
        console.log('Champignon supprimée');
         // Redirige vers la liste
         this.router.navigate(["/back-office/admin/champignon/Liste-des-champignons"]);
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }
}

