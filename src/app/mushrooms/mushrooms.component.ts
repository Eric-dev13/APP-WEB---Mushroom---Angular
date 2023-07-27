import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit {

  // GET
  findAllmushroomsApi: string = "http://localhost:9000/api/v1/mushroom";
  findAllMushrooms: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // GET :  findAll
    this.http.get(this.findAllmushroomsApi).subscribe((res) => {
      this.findAllMushrooms = res;
      console.log(this.findAllMushrooms);
    });
  }

  // addMushroom() {
  //   let newMushroom = {
  //     "commonname": "Ajout nom commun avec postman 3",
  //     "latinname": "Nom commun test",
  //     "flesh": "saveur et odeur douces.",
  //     "hat": "de 10 à 20 cm hémisphérique puis convexe, charnu, à surface plus ou moins bosselée et cuticule veloutée devenant mate, à marge lisse et régulière devenant très faiblement sinueuse, de couleur brun foncé à reflets bronzés, brun ochracés ou chamois, parfois plus clair selon l'exposition.",
  //     "lamella": "tubes fins de couleur blanchâtre devenant crème puis jaune à jaune verdâtre en vieillissant",
  //     "foot": "6 à 10 cm, très trapu, robuste, renflé à la base, obèse même, de couleur chamois à roux, strié d'un fin réseau d'abord blanc puis brun ; en bordure de sentier, lorsqu'il est bien exposé, il est parfois très court , le camouflant ainsi davantage dans la végétation ...",
  //     "habitat": "thermophile, il pousse de la fin de l'été au début de l'hiver, généralement dans les chênaies aérées.",
  //     "comment": "La chair du bolet bronzé est blanche et ferme lorsqu'il est frais et les spores sont de couleur brun olivâtre. Rarement isolé, il est le plus souvent entouré de plusieurs individus de la même espèce. Ses couleurs peuvent être claires ou sombres et il est assez fréquent de voir des individus à la cuticule aux couleurs zonées. Il s'agit d'un des plus fins champignons des bois qui dégage son arôme avec intensité à la cuisson.",
  //     "lamellatypeEntity": null,
  //     "localnameEntities": [

  //     ],
  //     "mediaEntities": [
  //       { "path": "test.jpg" }
  //     ]
  //   }

  //   this.http.post(this.addMushroomApi, newMushroom).subscribe((res) => {
  //     alert('new mushroom added');
  //   });
  // }

}
