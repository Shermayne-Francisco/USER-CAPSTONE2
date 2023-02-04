import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from 'src/app/services/session.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password:any;

  constructor(private session: SessionService,private alertController: AlertController,public post:PostService,private route: Router) { }

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
      this.session.uploadToSession(JSON.stringify(response.payload));
      this.route.navigate(['/userprofile']);

    },(error)=>{

      this.failAlert();

    });
  }

  async failAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Incorrect Email or password.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
