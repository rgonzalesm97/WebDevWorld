import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl: string = environment.url;

  constructor(
    private _http: HttpClient 
  ) { }

  getArticles(last:any = null): Observable<any>{

    var getAr = 'get';

    if(last != null){
      getAr = 'get/true';
    }

    return this._http.get(this.baseUrl + getAr);
  }

  getArticle(articleId:string):Observable<any>{
    return this._http.get(this.baseUrl + 'getone/' + articleId);
  }

  search(searchString: string):Observable<any>{
    return this._http.get(this.baseUrl + 'search/' + searchString);
  }
}
