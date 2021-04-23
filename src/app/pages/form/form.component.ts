import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  user: any;

  emailPattern: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { 
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      gender: '',
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    alert("This is a test form, check the conole to see your information");
  }

}
