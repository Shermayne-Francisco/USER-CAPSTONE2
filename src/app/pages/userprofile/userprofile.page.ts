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
  account = 'details';

  constructor() {}
}
