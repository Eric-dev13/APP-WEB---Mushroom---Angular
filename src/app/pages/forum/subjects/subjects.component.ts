import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { ForumSubject } from 'src/app/interfaces/forumSubject.interface';
import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ForumSubjectsPaginator } from 'src/app/interfaces/forum-subjects-paginator.interface';
import { Paginator } from 'src/app/interfaces/paginator.interface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(protected auth: AuthenticationService, private forumService: ForumService) { }

  // Configuration de la pagination : nombre d'élément par page
  itemsPerPage: number = 5;

  // Objet pour stocker les données paginées
  forumSubjectPaginate: ForumSubjectsPaginator = { forumSubjects: [], forumSubjectLength: 0 }


  public Editor = ClassicEditor;

  editorConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'Underline', 'Strike', '|', 'Subscript', 'Superscript', '-'],
  };

  readonly PUBLIC_URL_GET_FILE_USER: string = PUBLIC_URL_GET_FILE_USER;

  readonly: boolean = false;
  public isDisabled = false;
  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  ngOnInit(): void {
    // Charger les données initiales
    this.findAll(this.itemsPerPage, 0);
  }

  // Ecoute les changements du paginator (si click sur le btn next ou previous)
  handlePaginationEvent = (paginator: Paginator) => {
    //console.log("click sur le btn precedent ou suivant = Event", paginator);
    this.findAll(paginator.itemsPerPage, paginator.offset);
  }

  extractFirstWords(text: string, wordCount: number): string {
    const words = text.split(' ');
    const firstWords = words.slice(0, wordCount).join(' ');
    return firstWords;
  }

  addSubject = (form: NgForm) => {
  }

  // Méthode pour récupérer les données paginées
  findAll(limit?: number, offset?: number) {
    this.forumService.findAllPaginate(limit, offset).subscribe(
      {
        next: (data) => {
          //console.table(data),
          // Retourne la liste et le nombre total d'enregistrements.
          this.forumSubjectPaginate = data
        },
        error: err => console.log(),
        complete: () => console.log()
      })
  }
}
