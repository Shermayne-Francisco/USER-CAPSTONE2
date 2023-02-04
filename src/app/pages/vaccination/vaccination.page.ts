import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.page.html',
  styleUrls: ['./vaccination.page.scss'],
})
export class VaccinationPage implements OnInit {

  id = this.router.snapshot.paramMap.get('id');
  pets: any;

  constructor(private alertController: AlertController,private session: SessionService,public post:PostService,private router: ActivatedRoute,private route: Router) 
  { }

  ngOnInit() {
    this. getSched();
  }

  getSched()
  {
    let data = {
      type: 'Vaccination'
    }
    this.post.postDataID('getPetAppointment',JSON.stringify(data),this.id)
    .subscribe((response:any)=>{
      console.log(response);
      
      this.pets = response.payload;
    },()=>{
      this.pets = null;
    });
  }
}
