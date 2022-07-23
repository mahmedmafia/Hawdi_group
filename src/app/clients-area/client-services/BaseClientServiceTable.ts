import { Component, Input } from "@angular/core";
@Component({
  template: ''
})
export class BaseClientServiceTable {
  @Input() dataSource: any;
  constructor() {

  }
  onEditService(id: number) {
  }
  onViewService(id: number) {

  }
  onDeleteService(id: number) {

  }
  onConfirmRequest(id: number) {

  }
}
