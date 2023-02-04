import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-heartworm',
  templateUrl: './heartworm.page.html',
  styleUrls: ['./heartworm.page.scss'],
})
export class HeartwormPage implements OnInit {

  id = this.router.snapshot.paramMap.get('id');
  pets: any;

  constructor(public post:PostService,private router: ActivatedRoute) 
  { }

  ngOnInit() {
    this. getSched();
  }

  getSched()
  {
    let data = {
      type: 'heartworm'
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
