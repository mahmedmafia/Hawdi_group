import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerImage!:string;
  @Input()  isOverlayDark:boolean=true;
  @Input() minHeight='900px';
  constructor() { }

  ngOnInit(): void {
    if(!this.headerImage){
      this.headerImage="../../../assets/images/man-is-looking-watch-his-wrist.jpg";
    }
  }

}
