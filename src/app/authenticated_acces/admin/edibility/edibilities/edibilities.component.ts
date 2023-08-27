import { Component, OnInit } from '@angular/core';
import { EdibilityInterface } from '../edibility-interface';
import { API_ADMIN_BASE_URL, API_URL_GET_FILE_EDIBILITY, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { faEdit, faTrash, faRotateLeft, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edibilities',
  templateUrl: './edibilities.component.html',
  styleUrls: ['./edibilities.component.scss']
})
export class EdibilitiesComponent implements OnInit {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  readonly API_URL_GET_FILE_EDIBILITY = API_URL_GET_FILE_EDIBILITY;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY = PUBLIC_URL_GET_FILE_EDIBILITY;

  faEdit = faEdit;
  faTrash = faTrash;
  faRotateLeft = faRotateLeft;
  faSquarePlus=faSquarePlus;

  edibilities: EdibilityInterface[] = []; // type du tableau d'objets
  // edibilities!: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    // GET : findAll
    this.http.get<EdibilityInterface[]>(this.API_ADMIN_BASE_URL + "edibility").subscribe({
      next: (res) => {
        this.edibilities = res;
        console.log("list edibility: ", this.edibilities);
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Liste téléchargé!')
    });
  }

  delete(id: any) {
    // DELETE
    this.http.delete(this.API_ADMIN_BASE_URL + 'edibility/' + id).subscribe({
      next: (data) => this.load(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('L\'enregistrement a été supprimé')
    })
  }

}
