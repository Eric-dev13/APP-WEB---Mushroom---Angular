import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { ForumSubjectsPaginator } from 'src/app/interfaces/forum-subjects-paginator.interface';
import { Paginator } from 'src/app/interfaces/paginator.interface';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PaginatorComponent } from 'src/app/layouts/paginator/paginator.component';
import { ForumCategory } from 'src/app/interfaces/forum-category.interface';



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(
    protected auth: AuthenticationService,
    private forumService: ForumService
  ) { }

  readonly PUBLIC_URL_GET_FILE_USER: string = PUBLIC_URL_GET_FILE_USER;

  // Nombre d'élément par page
  itemsPerPage: number = 15;

  // Accéder aux propriétés du composant enfant 
  @ViewChild(PaginatorComponent) childPaginator!: PaginatorComponent;

  // Objet pour stocker les données paginées
  forumSubjectPaginate: ForumSubjectsPaginator = { forumSubjects: [], forumSubjectLength: 0 }

  public Editor = ClassicEditor;

  contentEditor: string = "";
  titleSubject: string = "";

  // Affiche la liste des catégories dans les options du select input 
  categories: ForumCategory[] = [];
  // binder la propriété filterCategoryId avec le choix du select input
  filterCategoryId: number | undefined;

  errors: { [key: string]: string } = {};

  isShowCommentary: boolean[] = [];

  isExpanded = false;

  toggleCommentary(index: number): void {
    this.isShowCommentary[index] = !this.isShowCommentary[index];
    // console.log(index,': ',this.isShowCommentary[index]);
  }

  ngOnInit(): void {
    // Charger les données initiales
    this.findAllCategories();
    this.findAll(this.itemsPerPage, 0);
  }

  findAllCategories = () => {
    this.forumService.findAllCategories().subscribe({
      next: (data: ForumCategory[]) => {
        this.categories = data;
        // console.log("Categories",data);
      },
      error: (err: Error) => console.log()

    })
  }

  // Ecoute les changements du paginator (si click sur le btn next ou previous)
  handlePaginationEvent = (paginator: Paginator) => {
    //console.log("click sur le btn precedent ou suivant = Event", paginator);
    this.findAll(paginator.itemsPerPage, paginator.offset);
  }

  addSubject = (form: NgForm) => {
    let isAddSubject: boolean = false;

    if (form.value.titre != '' && form.value.description != '') { }
    this.forumService.add(form).subscribe({
      next: (data) => {
        if (data) {
          isAddSubject = true;
        }
      },
      error: (err: Error) => console.log(),
      complete: () => {
        if (isAddSubject) {
          this.findAll(this.childPaginator.paginator.itemsPerPage, this.childPaginator.paginator.offset);
          // Vide l'editeur
          this.titleSubject = "";
          this.contentEditor = "";
        }
      }
    });
  }

  onCategoryChange = (categoryId: number | undefined) => {
    // this.filterCategoryId = categoryId;
    this.findAll(this.itemsPerPage, 0);
    // Lorsque l'on change de catégorie on retourne  sur la page n°1
    this.childPaginator.paginator.currentPage = 1;
  }

  // Méthode pour récupérer les données paginées
  findAll(limit?: number, offset?: number) {
    this.forumService.findAllPaginate(limit, offset, this.filterCategoryId).subscribe({
      next: (data: ForumSubjectsPaginator) => {
        console.log("findAllPaginate", data),
          // Retourne la liste et le nombre total d'enregistrements.
          this.forumSubjectPaginate = data;
        console.log(data.forumSubjects.length + " sujet(s) sur un total de " + data.forumSubjectLength);
      },
      error: (err: Error) => {
        console.log("erreur");
        this.checkDataConstraints(err);
      },
    })
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          console.log("errors", this.errors);

          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }

  emptyErrors = (): void => {
    this.errors = {};
  }


}
