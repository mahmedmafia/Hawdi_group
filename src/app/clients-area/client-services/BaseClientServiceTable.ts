import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  template: ''
})
export class BaseClientServiceTable {
  @Input() dataSource: any;
  constructor(private router:Router,private route:ActivatedRoute) {

  }
  onEditService(id: number) {
  }
  onViewService(id: number) {
    this.router.navigate([id],{relativeTo:this.route})

  }
  onDeleteService(id: number) {

  }
  onConfirmRequest(id: number) {

  }
}
