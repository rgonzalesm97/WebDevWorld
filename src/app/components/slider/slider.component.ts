import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
   div {
    background: rgb(21,43,128);
    background: -moz-linear-gradient(90deg, rgba(21,43,128,1) 0%, rgba(0,14,68,1) 35%, rgba(0,14,68,1) 65%, rgba(21,43,128,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(21,43,128,1) 0%, rgba(0,14,68,1) 35%, rgba(0,14,68,1) 65%, rgba(21,43,128,1) 100%);
    background: linear-gradient(90deg, rgba(21,43,128,1) 0%, rgba(0,14,68,1) 35%, rgba(0,14,68,1) 65%, rgba(21,43,128,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#152b80",endColorstr="#152b80",GradientType=1);
   }
  `]
})
export class SliderComponent implements OnInit {

  @Input() page: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
