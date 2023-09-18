import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-section',
  templateUrl: './faqs-section.component.html',
  styleUrls: ['./faqs-section.component.scss']
})
export class FAQsSectionComponent implements OnInit {
  descConst="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro"
  sampleArray :faqItem[]=[
    {title:'FAQs Item 1',desc:this.descConst},
    {title:'FAQs Item 2',desc:this.descConst},
    {title:'FAQs Item 3',desc:this.descConst},
    {title:'FAQs Item 4',desc:this.descConst},
    {title:'FAQs Item 5',desc:this.descConst},

  ];
  constructor() { }
  selectedIndex=-1;
  ngOnInit(): void {
  }
  onClickFaq(faqIndex:number){
    this.selectedIndex=faqIndex==this.selectedIndex?-1:faqIndex;
  }
}
export interface faqItem{
  title:string;
  desc:string;
}
