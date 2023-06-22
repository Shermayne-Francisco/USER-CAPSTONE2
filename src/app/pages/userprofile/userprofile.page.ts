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
  // modal: any;

  dateValue: any;

  account = 'details';  
  
  sessionData: any =  this.session.getSessionData();
  tokenData:any = JSON.parse(this.sessionData).token;

  user_fname:any = JSON.parse(this.sessionData).user_fname;
  user_lname:any = JSON.parse(this.sessionData).user_lname;
  contact:any = JSON.parse(this.sessionData).contact;
  address:any = JSON.parse(this.sessionData).address;
  email:any = JSON.parse(this.sessionData).email;
  id:any = JSON.parse(this.sessionData).id;

  pets: any = [];

  Name:any;
  cm:any;
  breed:any;
  gender:any;
  species: any;

  //add appointment data
  pet_id:any;
  app_type:any;
  app_date:any;
  appdate: any;
  apptime: any;
  appointmentData: any;
  
  constructor(private alertController: AlertController, private session: SessionService, public post:PostService, private route: Router) 
  {
    
  }

  ngOnInit() 
  {
    this.getPet();
    this.getAppointment();
  }

  get date(): any {
    return this.dateValue;
  }

  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
    this.appdate = this.dateValue.slice(0,10);
    this.apptime = this.dateValue.slice(11,19);
  }

  editProfle() {
    this.route.navigate(['/editprofile']);
  }

  getPet() {
   

    this.post.postNull('getpet',this.id)
    .subscribe((response:any)=>{
    
      this.pets = response.payload;

    },(error)=>{
     
      this.pets = null;
      
    });
  }

  getPetInfo(id:any) {
    this.route.navigate(['/petinfo/'+id]);
  }

  addAppointment(){
    let data = {
      user_id : this.id,
      pet_id : this.pet_id,
      app_type : JSON.stringify(this.app_type),
      status : "Pending",
      app_time : this.apptime ,
      app_date : this.appdate
    }

    this.post.postData('addAppointment',JSON.stringify(data))
    .subscribe((response:any) => {
      console.log();
      
      if(this.appointmentData == null){
        this.appointmentData = response.payload[0];
      }else{
        this.appointmentData.push(data);

      }
      
      this.SuccessAppointment();
    },(error)=>{
      console.log("error");

    })
  }

  getAppointment(){
    
    this.post.postNull('getAppointment',this.id)
    .subscribe((response:any) => {
      this.appointmentData = response.payload;
    },(error)=>{
        console.log("No Appointment!");
        
    });
    
  }

  addPet() {
    let data = {
      user_id: this.id,
      pet_name:	this.Name,
      pet_cm: this.cm,
      pet_breed: this.breed,
      birthdate: this.dateValue.slice(0,10),
      gender: this.gender,
      species: this.species
    }
   
    this.post.postData('addpet',JSON.stringify(data))
    .subscribe((response:any)=>{

      if(this.pets == null){
        this.pets = response.payload[0];
      }else{
        this.pets.push(response.payload[0]);

      }
      
      this.Success();

    },(error)=>{
      console.log(error);
      
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

  async SuccessAppointment() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Appointment Added!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async SuccessUpdate() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Data updated!',
      buttons: ['OK'],
      
    });
    window.location.reload();
    await alert.present();
  }
  update(status:any,id:any){
    let data = {
      status: status
    };

    this.post.postDataID('updateAppointment',JSON.stringify(data),id)
    .subscribe((response:any)=>{

      this.getPet();
      this.SuccessUpdate();

    });
  }

  logout() {
    this.session.deleteData();
    this.route.navigate(['/home']);
  }

  getFormattedArray(types: string) {
    return JSON.parse(types).join(', ');
  }
}
