import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [BlogService],
})
export class HomeComponent implements OnInit {
  articles!: Article[];
  baseUrl: string = environment.url;

  constructor(
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogService.getArticles(true).subscribe(
      (response) => {
        if (response.articles) {
          this.articles = response.articles;
          console.log(this.articles);
        } else {
          console.log('no articles');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
