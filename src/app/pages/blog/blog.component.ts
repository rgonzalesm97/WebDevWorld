import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Article } from '../../models/article';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  articles!: Article[];
  baseUrl: string = environment.url;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getArticles().subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;

        }else{
          console.log("no articles")
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
