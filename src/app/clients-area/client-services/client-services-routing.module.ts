import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServiceDetailsComponent } from './client-service-details/client-service-details.component';
import { ClientServiceEditComponent } from './client-service-edit/client-service-edit.component';
import { ClientServiceStatusComponent } from './client-service-status/client-service-status.component';
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
  },
  {
    path: 'edit/:id',
    component: ClientServiceEditComponent,
  },
  {
    path: 'status/:id',
    component: ClientServiceStatusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientServicesRoutingModule { }
