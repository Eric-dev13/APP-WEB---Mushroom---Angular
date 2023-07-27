import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-mushroom',
  templateUrl: './form-mushroom.component.html',
  styleUrls: ['./form-mushroom.component.scss']
})
export class FormMushroomComponent implements OnInit {

  // POST
  mushroomUrlApi: string = "http://localhost:9000/api/v1/admin/mushroom/";

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  mushroom = {
    "id":0,
    "commonname": '',
    "latinname": '',
    "flesh": '',
    "hat": '',
    "lamella": '',
    "foot": '',
    "habitat": '',
    "comment": '',
    "localnames": ''
}


  ngOnInit(): void { }


  send(form:NgForm) {
    if (form.value.id != 0) {
      // UPDATE 
      this.http.put(this.mushroomUrlApi, form.value).subscribe((res) => {
        alert('new mushroom added');
      });
    } else {
      // POST
      this.http.post(this.mushroomUrlApi, form.value).subscribe((res) => {
        alert('new mushroom added');
      });
    }
  }


  // commonname!: string;
  // latinname!: string;
  // flesh!: string;
  // hat!: string;
  // lamella!: string;
  // foot!: string;
  // habitat!: string;
  // comment!: string;
  // lamellatypeEntity!: any;
  // localnameEntities!: any;
  // mediaEntities!: any;

  addMushroom() {
    // let mushroom = {
    //     "commonname": this.commonname,
    //     "latinname": this.latinname,
    //     "flesh": this.flesh,
    //     "hat": this.hat,
    //     "lamella": this.lamella,
    //     "foot": this.foot,
    //     "habitat": this.habitat,
    //     "comment": "La chair du bolet bronzé est blanche et ferme lorsqu'il est frais et les spores sont de couleur brun olivâtre. Rarement isolé, il est le plus souvent entouré de plusieurs individus de la même espèce. Ses couleurs peuvent être claires ou sombres et il est assez fréquent de voir des individus à la cuticule aux couleurs zonées. Il s'agit d'un des plus fins champignons des bois qui dégage son arôme avec intensité à la cuisson.",
    //     "lamellatypeEntity": null,
    // }

    // this.http.post(this.mushroomUrlApi, mushroom).subscribe((res) => {
    //   alert('new mushroom added');
    // });
  }

}
