import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: 'userprofile.page.html',
  styleUrls: ['userprofile.page.scss'],
})
export class UserprofilePage implements OnInit{
  modal: any;

  // MODAL FOR SCHEDULE FORM
  cancel() {
    this.modal.dismiss('cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }
  // END OF MODAL FOR SCHEDULE FORM 

  private dateValue: any;

  account = 'details';  
  
  sessionData: any =  this.session.getSessionData();
  tokenData:any = JSON.parse(this.sessionData).token;

  user_fname:any = JSON.parse(this.sessionData).user_fname;
  user_lname:any = JSON.parse(this.sessionData).user_lname;
  contact:any = JSON.parse(this.sessionData).contact;
  address:any = JSON.parse(this.sessionData).address;
  email:any = JSON.parse(this.sessionData).email;
  id:any = JSON.parse(this.sessionData).id;

  pets: any;

  Name:any;
  cm:any;
  breed:any;
  gender:any;
  constructor(private alertController: AlertController, private session: SessionService, public post:PostService, private route: Router) 
  {
   
   }
  ngOnInit() {
    this.getPet();
  }

  get date(): any {
    return this.dateValue;
  }

  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }

  editProfle() {
    this.route.navigate(['/editprofile']);
  }

  getPet() {
    this.post.postNull('getuserpet',this.id)
    .subscribe((response:any)=>{
    
      this.pets = response.payload;
      
    },(error)=>{
     
      this.pets = null;
      
    });
  }

  getPetInfo(id:any) {
    this.route.navigate(['/petinfo/'+id]);
  }

  addPet() {
    let data = {
      user_id: this.id,
      pet_name:	this.Name,
      pet_cm: this.cm,
      pet_breed: this.breed,
      birthdate: this.dateValue.slice(0,10),
      gender: this.gender,
    }
   
    console.log(data);
    
    this.post.postData('addpet',JSON.stringify(data))
    .subscribe((response:any)=>{

      this.pets.push(response.payload[0]);
      console.log(this.pets);
      console.log(response);
      
      this.Success();

    });
  }

  async Success() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Pet Added!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  logout() {
    this.session.deleteData();
    this.route.navigate(['/home']);
  }
}
