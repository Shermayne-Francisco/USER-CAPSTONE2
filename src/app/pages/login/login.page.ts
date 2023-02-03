import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password:any;

  constructor(public post:PostService) { }

  ngOnInit() {

  }

  login()
  {
    let loginData = {
      email: this.email,
      password: this.password
    };
      console.log(loginData);

    this.post.postData('Login',JSON.stringify(loginData))
    .subscribe((response:any)=>{
      console.log(response);
      // [routerLink]="['/userprofile']"
    });
  }

}
