import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  services=[
    {image:'/assets/images/services/Transportation.png',name:'Transportation'},
    {image:'/assets/images/services/Accommodation.png',name:'Accommodation'},
    {image:'/assets/images/services/Hospitality.png',name:'Hospitality'},
    {image:'/assets/images/services/PCR.png',name:'PCR'},
    {image:'/assets/images/services/Admin.png',name:'Admin'},
    {image:'/assets/images/services/Printouts.png',name:'Printouts'},
    {image:'/assets/images/services/Shipping.png',name:'Shipping'},
    {image:'/assets/images/services/Yacht.png',name:'Yacht'},
    {image:'/assets/images/services/Private Jet.png',name:'Private Jet'},
  ]
  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickBook(serviceName:string){

    this.route.navigate(['/services/'+serviceName.trim().toLowerCase()],{relativeTo:this.activatedRoute})
  }
}
