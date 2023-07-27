import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-mushroom',
  templateUrl: './list-mushroom.component.html',
  styleUrls: ['./list-mushroom.component.scss']
})
export class ListMushroomComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  // GET
  mushroomsUrlApi: string = "http://localhost:9000/api/v1/admin/mushroom";
  mushrooms: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    // GET :  findAll
    this.http.get(this.mushroomsUrlApi).subscribe((res) => {
      this.mushrooms = res;
      console.log(this.mushrooms);
    });
  }

  delete(id: any) {
    // DELETE
    this.http.delete(this.mushroomsUrlApi + '/' + id).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    })

    this.router.navigate(['admin/champignons/Liste-des-champignons']);
  }

}
