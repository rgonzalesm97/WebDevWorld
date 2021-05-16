import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  public searchString!: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void  {
  }

  goSearch(){
    this._router.navigate(['/pages/blog/search', this.searchString]);
  }

  newArticle(){
    this.authService.validateToke()
      .subscribe(resp => {
        if(resp === false){
          this._router.navigateByUrl('/pages/login');
        }else{
          this._router.navigateByUrl('/pages/blog/newArticle');
        }
      })
  }

}
