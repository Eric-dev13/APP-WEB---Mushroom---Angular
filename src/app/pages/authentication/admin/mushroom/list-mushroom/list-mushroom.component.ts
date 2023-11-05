import { Component, OnInit } from '@angular/core';
import { faEdit,faTrash, faCircleInfo, faThumbsUp, faThumbsDown,faEye, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { MushroomAdminService } from 'src/app/services/mushroom.service';
import { Mushroom } from 'src/app/interfaces/mushroom.interface';



@Component({
  selector: 'app-list-mushroom',
  templateUrl: './list-mushroom.component.html',
  styleUrls: ['./list-mushroom.component.scss']
})
export class ListMushroomComponent implements OnInit {

  constructor(private mushroomAdminService: MushroomAdminService, private router: Router, private route: ActivatedRoute) { }
  
  faEdit=faEdit;
  faTrash=faTrash;
  faCircleInfo=faCircleInfo;
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  faEye=faEye;
  faSquarePlus=faSquarePlus;


  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;


  // GET
  mushrooms!: Mushroom[];
  mushroomIsVisible:any


  ngOnInit(): void { this.reaload() }


  // Inverser la valeur de mushroom.visibility
  activate(id: any){
    this.mushroomAdminService.invertVisibility(id).subscribe({
      next: (data) => this.reaload(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Modification effectué')
    })
  }
  

  delete(id: any) {
    // DELETE
    this.mushroomAdminService.delete(id).subscribe({
      next: (data) => this.reaload(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('L\'enregistrement a été supprimé')
    });
  }

  reaload() {
    // GET : findAll
    this.mushroomAdminService.findAll().subscribe((res) => {
      this.mushrooms = res;
      console.log("list mushroom: ", this.mushrooms);
    });
  }


}
