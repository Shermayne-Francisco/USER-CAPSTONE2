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
  remarks: any;

  constructor(public post:PostService,private router: ActivatedRoute) 
  { }

  ngOnInit() {
    this. getSched();
  }

  getSched()
  {
    let data = {
      type: 'Heartworm' 
    }
    this.post.postDataID('getPetinfos',JSON.stringify(data),this.id)
    .subscribe((response:any)=>{
      console.log(response.status.remarks);
      this.remarks = response.status.remarks;
      this.pets = response.payload;

    },()=>{
      this.pets = null;
    });
  }

}
