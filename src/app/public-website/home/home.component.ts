import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,private scroller: ViewportScroller) { 
    this.route.params.subscribe(params => {
      console.log(params);
      if(params['section'] !== ''){
        this.scroller.scrollToAnchor(params['section']);
      }else if(!params['section']){
        this.scroller.scrollToAnchor('homeHeader')
      }
    })
  }

  ngOnInit(): void {
  }

}
