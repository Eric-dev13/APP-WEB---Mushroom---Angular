import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { ForumSubject } from 'src/app/interfaces/forumSubject.interface';
import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(protected auth: AuthenticationService, private forumService: ForumService) { }

  sujets!: ForumSubject[];

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
    this.forumService.findAll().subscribe(
      {
        next: (data) => {
          console.table(data),
            this.sujets = data
        },
        error: err => console.log(),
        complete: () => console.log()
      })
  }

  extractFirstWords(text: string, wordCount: number): string {
    const words = text.split(' ');
    const firstWords = words.slice(0, wordCount).join(' ');
    return firstWords;
  }

  addSubject = (form: NgForm) => {

  }
}
