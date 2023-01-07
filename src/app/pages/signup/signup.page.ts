// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.page.html',
//   styleUrls: ['./signup.page.scss'],
// })
// export class SignupPage implements OnInit {
//   private dateValue: any;

//   constructor() {}
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   get date(): any {
//     return this.dateValue;
//   }
//   set date(value: any) {
//     console.log({ value });
//     this.dateValue = value;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  private dateValue: any;

  constructor() {}

  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
}