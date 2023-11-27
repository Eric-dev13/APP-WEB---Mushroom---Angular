import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumCommentaryComponent } from './admin/forum/forum-commentary/forum-commentary.component';
import { ForumSubjectComponent } from './admin/forum/forum-subject/forum-subject.component';
import { ForumCategoryComponent } from './admin/forum/forum-category/forum-category.component';

// REQUETE et INTERCEPTEUR
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from 'src/app/services/token.interceptor';



@NgModule({
  declarations: [
    ForumCommentaryComponent,
    ForumSubjectComponent,
    ForumCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
})
export class AuthenticationModule { }
