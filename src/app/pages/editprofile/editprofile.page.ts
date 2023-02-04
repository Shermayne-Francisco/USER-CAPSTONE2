import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  password:any;

  sessionData: any =  this.session.getSessionData();
  tokenData:any = JSON.parse(this.sessionData).token;

  user_fname:any = JSON.parse(this.sessionData).user_fname;
  user_lname:any = JSON.parse(this.sessionData).user_lname;
  user_contact:any = JSON.parse(this.sessionData).contact;
  user_address:any = JSON.parse(this.sessionData).address;
  user_email:any = JSON.parse(this.sessionData).email;
  user_id:any = JSON.parse(this.sessionData).id;

  constructor(private alertController: AlertController,private session: SessionService,public post:PostService,private route: Router) { }

  ngOnInit() {
    
  }

  updateProfile(){

    let data = {
      user_fname: this.user_fname || null,
      user_lname: this.user_lname || null,
      contact: this.user_contact || null,
      address: this.user_address || null,
      email: this.user_email || null,
     user_id:  this.user_id 
    }
    console.log(data);
    
    this.post.postDataID('updateUsers',JSON.stringify(data),this.user_id)
    .subscribe((response:any)=>{
      console.log(response);
      
      //remove and add the new changes to session
      this.session.deleteData();
      this.session.uploadToSession(JSON.stringify(response.payload[0]));
     
      this.Success();

    });

    // this.post.postDataID('updateUsers',JSON.stringify(data),this.user_id)
    // .subscribe((response:any)=>{

    //   //remove and add the new changes to session
    //   this.session.deleteData();
    //   this.session.uploadToSession(JSON.stringify(response.payload));
    //   location.reload();

    //   this.route.navigate(['/userprofile']);

    // });

  }

  async Success() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Profile updated.',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.route.navigate(['/userprofile']);
        },
      }],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    

  }
}

