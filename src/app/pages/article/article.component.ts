import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { environment } from '../../../environments/environment.prod';
import swal from 'sweetalert';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [`
    #articleImg{
      height: 400px; 
      overflow: hidden; 
      background-position: center; 
      background-repeat: no-repeat;
      background-size: cover;
    }
  `
  ]
})
export class ArticleComponent implements OnInit {

  article!: Article;
  imgUrl!: string;

  constructor(
    private blogService: BlogService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.blogService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
            this.imgUrl = response.article.image != null ? environment.url + 'get-image/' + response.article.image : '../../../assets/no-image.jpg';
          }else{
            this._router.navigate(['/pages/home']);
          }
        },
        error => console.log(error)
      );

    });
  }

  deleteArticle(id:string){

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this article!',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.blogService.delete(id).subscribe(
          response => {
            swal('Poof! Article has been deleted!', {
              icon: 'success',
            });
            this._router.navigate(['pages/blog']);
          },
          err => {
            console.log(err);
            this._router.navigate(['pages/blog']);
          }
        )
      } else {
        swal('The article is safe!');
      }
    });
  }

}
