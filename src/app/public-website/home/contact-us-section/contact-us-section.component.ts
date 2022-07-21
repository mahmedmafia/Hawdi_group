import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss']
})
export class ContactUsSectionComponent implements OnInit {
  contactUsForm:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.contactUsForm=new FormGroup({
      name:new FormControl(''),
      phone:new FormControl(''),
      subject:new FormControl(''),
      email:new FormControl(''),
      message:new FormControl(''),
    })
  }

}
