import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faEdit,faTrash, faCircleInfo, faThumbsUp, faThumbsDown,faEye } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL, API_URL_GET_FILE_MUSHROOM } from 'src/environments/config';


@Component({
  selector: 'app-list-mushroom',
  templateUrl: './list-mushroom.component.html',
  styleUrls: ['./list-mushroom.component.scss']
})
export class ListMushroomComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  faEdit = faEdit;
  faTrash = faTrash;
  faCircleInfo = faCircleInfo;
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  faEye=faEye;

    // Déclaration de constantes
    readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
    readonly API_URL_GET_FILE_MUSHROOM: string = API_URL_GET_FILE_MUSHROOM;

  // GET
  mushrooms: any;
  mushroomIsVisible:any

  reaload() {
    // GET : findAll
    this.http.get(this.API_ADMIN_BASE_URL + "mushroom").subscribe((res) => {
      this.mushrooms = res;
      console.log(this.mushrooms);
    });
  }

  ngOnInit(): void { this.reaload()  }
    

  // Inverser la valeur de mushroom.visibility
  activate(id:any, visibility:any){
    
    this.http.patch(this.API_ADMIN_BASE_URL + 'mushroom/publier/' + id, {}).subscribe({
      next: (data) => this.reaload(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Modification effectué')
    })
    
  }

  delete(id: any) {
    // DELETE
    this.http.delete(this.API_ADMIN_BASE_URL + 'mushroom/' + id).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('L\'enregistrement a été supprimé')
    })

    this.router.navigate(['admin/champignons/Liste-des-champignons']);
  }



}
