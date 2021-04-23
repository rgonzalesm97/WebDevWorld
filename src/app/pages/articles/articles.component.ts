import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styles: [
  ]
})
export class ArticlesComponent implements OnInit {

  @Input() articles!: Article[];
  baseUrl: string = environment.url;

  constructor() {
  }

  ngOnInit(): void {

  }

}
