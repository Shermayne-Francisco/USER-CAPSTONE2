import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit{
  // private dateValue: any;

  fName: any;
  mName: any;
  lName: any;
  Email: any;
  Contact: any;
  Address: any;
  Password: any;
  Confirm: any;

  constructor(private alertController: AlertController,public post:PostService,private route: Router) {}

  ngOnInit(): void {
   
  }

  // get date(): any {
  //   return this.dateValue;
  // }
  // set date(value: any) {
  //   console.log({ value });
  //   this.dateValue = value;
  // }

  registerUser()
  {
    if (this.Password == this.Confirm != null &&
      this.fName != null &&      this.fName != undefined &&       this.fName != "" &&
      this.lName != null &&      this.lName != undefined &&       this.lName != "" &&
      this.Email != null &&      this.Email != undefined &&       this.Email != "" &&
      this.Contact != null &&      this.Contact != undefined &&       this.Contact != "" &&
      this.Address != null &&      this.Address != undefined &&       this.Address != "" &&
      this.Password != null &&      this.Password != undefined &&       this.Password != "" &&
      this.Confirm != null &&      this.Confirm != undefined &&       this.Confirm != "" 
      ) {
          let data = {
            user_fname: this.fName,
            user_lname: this.lName,
            email: this.Email,
            contact: this.Contact,
            address: this.Address,
            password: this.Password
          }

          
          this.post.postData('Register',JSON.stringify(data))
          .subscribe((response:any)=>{

            console.log(response);
            this.route.navigate(['/home']);

          }, (then)=>{

            this.EmailExistAlert();
          
          });

        console.log(data);
    

    }else{
      this.filedAlert();
    }
  }

  async filedAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Fill all the blank',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async EmailExistAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Email already exist, please try other email.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}