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

  constructor(private alertController: AlertController,private session: SessionService,public post:PostService,private router: ActivatedRoute,private route: Router) 
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
        },
      ],
    });

    await alert.present();
  }

  getPetInfo()
  {
    this.post.postNull('getpet',this.id)
    .subscribe((response:any)=>{
      this.pets = response.payload;
    });
  }

  history(type:any){
    this.route.navigate([type + this.id]);
  }
}