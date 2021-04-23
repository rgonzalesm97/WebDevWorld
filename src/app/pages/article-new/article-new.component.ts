import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styles: [],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string = '';

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

  ngOnInit(): void {}

  saveArticle() {
    this.blogService.create(this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          //Alert
          swal(
            'Article created!',
            'The article has been created',
            'success'
          );

          this._router.navigate(['pages/blog']);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }

  imageUpload(event: any){
    this.article.image = event.body.image; 
  }
}
