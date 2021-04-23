import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from 'src/app/models/article';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  articles!: Article[];
  baseUrl: string = environment.url;
  search!: string;

  constructor(
    private blogService: BlogService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      var searchString = params['search'];
      this.search = params['search'];

      this.blogService.search(searchString).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
          }else{
            console.log("no articles");
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );

    })
  }

}
