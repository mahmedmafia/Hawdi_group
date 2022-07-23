import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  img = 'assets/images/Group -38.png';
  clientObject: any;
  clientKeyValuesArr:any[]=[];
  passwordLength=[];
  clientPaymentMethods=[
    {id:1,name:'visa',date:new Date(2022,3,23)},
    {id:2,name:'Master Card',date:new Date(2019,5,15)},
  ];
  servicesList=[
    {img:'assets/images/Group-30.png',link:'client/bookings',title:'Book a Service',desc:'Chose a service to book from our services options,'},
    {img:'assets/images/Group-30.png',link:'client/services',title:'Check your Services',desc:'Check your requested services, track the current status and availability.'},
    {img:'assets/images/Group-30.png',link:'client/bookings/history',title:'Check your History',desc:'Check your requested services history, invoices and informations'},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.clientObject = {
      Name: 'Ahmed Yahya Al Fayed',
      'Phone No': '0534446078',
      Email: 'ahmed.yahya@next.com',
      'National Unified No.': '94334950037205440',
      'Password': '123456Ma_',
      'Entity Name': 'Next Consultation',
    }
    this.passwordLength.length=this.clientObject['Password'].length;
    for(let key of Object.keys(this.clientObject)){
      const object={
        'key':key,
        'value':this.clientObject[key],
      }
      this.clientKeyValuesArr.push(object);
    }
    console.log(this.clientKeyValuesArr);
  }
  onClickService(href:string){
    this.router.navigate(['/'+href]);
  }
}
