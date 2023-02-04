import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular/providers/alert-controller';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-deworming',
  templateUrl: './deworming.page.html',
  styleUrls: ['./deworming.page.scss'],
})
export class DewormingPage implements OnInit {
  pets: any;
  id = this.router.snapshot.paramMap.get('id');
  constructor(private session: SessionService,public post:PostService,private router: ActivatedRoute,private route: Router) 
  {
    
  }
  
  ngOnInit() {
    this.getSched();
  }
  getSched()
  {
    let data = {
      type: 'Deworming'
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
