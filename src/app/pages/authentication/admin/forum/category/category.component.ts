import { Component, OnInit } from '@angular/core';
import { ForumCategory } from 'src/app/interfaces/forum-category.interface';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories!:ForumCategory[];

  constructor(
    private forumService: ForumService
  ){}

  ngOnInit(): void {
    this.forumService.findAllCategories().subscribe({
      next: (data: ForumCategory[]) => {
        this.categories = data;
      },
      error: (err:Error) => console.log()
      
    })
  }
}
