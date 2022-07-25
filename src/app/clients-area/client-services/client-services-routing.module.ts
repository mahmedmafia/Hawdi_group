import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServiceDetailsComponent } from './client-service-details/client-service-details.component';
import { ClientServicesComponent } from './client-services.component';

const routes: Routes = [
  {
    path: '',
    component: ClientServicesComponent,
    pathMatch:'full',
  },
  {
    path: ':id',
    component: ClientServiceDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientServicesRoutingModule { }
