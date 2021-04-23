import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styles: [
  ]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string = '';
  baseUrl: string = environment.url;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: 50,
    uploadAPI: {
      url: environment.url + 'upload-image'
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit',
    },
  };

  constructor(
    private blogService: BlogService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.article = new Article('', '', '', null, null);
  }

  ngOnInit(): void {
    this.getArticle();
  }

  updateArticle() {
    this.blogService.update(this.article._id, this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.articleUpdated;

          //Alert
          swal(
            'Article updated!',
            'The article has been updated',
            'success'
          );

          this._router.navigate(['pages/blog/article', response.articleUpdated._id]);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
        //Alert
        swal(
          'Fail updating!',
          'There was an error updating the article',
          'error'
        );
      }
    );
  }

  imageUpload(event: any){
    this.article.image = event.body.image; 
  }

  getArticle(){
    this._route.params.subscribe(params => {

      let id = params['id'];

      this.blogService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/pages/home']);
          }
        },
        error => console.log(error)
      );

    })
  }

}
