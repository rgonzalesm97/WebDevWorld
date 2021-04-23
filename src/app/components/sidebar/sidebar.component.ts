import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  public searchString!: string;

  constructor() { }

  ngOnInit(): void {
  }

  goSearch(){
    console.log(this.searchString);
  }

}
