import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent {
    // GET
    findAllMediasApi: string = "http://localhost:9000/api/v1/admin/media";
    findAllMedias: any;
  
    constructor(private http: HttpClient) { }
  
  
    ngOnInit(): void {
      // GET :  findAll
      this.http.get(this.findAllMediasApi).subscribe((res) => {
        this.findAllMedias = res;
        console.log(this.findAllMedias);
      });
    }
  

}
