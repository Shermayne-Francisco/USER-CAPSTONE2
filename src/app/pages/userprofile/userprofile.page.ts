// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-userprofile',
//   templateUrl: './userprofile.page.html',
//   styleUrls: ['./userprofile.page.scss'],
// })
// export class UserprofilePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: 'userprofile.page.html',
  styleUrls: ['userprofile.page.scss'],
})
export class UserprofilePage {
  private dateValue: any;

  account = 'details';  
  
  constructor() {}
  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
}
