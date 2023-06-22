import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-petinfo',
  templateUrl: 'petinfo.page.html',
})
export class PetinfoPage implements OnInit {

  id = this.router.snapshot.paramMap.get('id');
  pets: any;
  petname: any;

  constructor(
    private alertController: AlertController,
    private session: SessionService,
    public post:PostService,
    private router: ActivatedRoute,
    private route: Router) 
  {
    
  }
  ngOnInit(): void {
    this.getPetInfo();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Delete this pet profile?',
      cssClass: 'delete-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.deletePet();
          }
        },
      ],
    });

    await alert.present();
  }

  getPetInfo()
  {
    this.post.postNull('getpetinfo',this.id)
    .subscribe((response:any)=>{
      this.pets = response.payload;
      console.log(this.pets);
      this.petname = this.pets[0].pet_name
      
    });
  }

  deletePet(){
    this.post.postNull('deletePet',this.id)
      .subscribe((response:any)=>{
        
        this.route.navigate(['userprofile']);
      
      },(error)=>{
        console.log("error");
      });
  }

  history(type:any){
    this.route.navigate([type + this.id]);
  }

  updatePet(){
    this.post.postData('updatePet',JSON.stringify({pet_id: this.id, pet_name: this.petname}))
    .subscribe((response:any)=>{
      
      console.log(this.pets);
      console.log(response);
    });
  }
}