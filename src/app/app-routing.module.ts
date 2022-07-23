import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsAreaComponent } from './clients-area/clients-area.component';
import { PublicWebsiteComponent } from './public-website/public-website.component';

const routes: Routes = [
  {
    path: '',
    component: PublicWebsiteComponent,
    loadChildren: () => import('./public-website/public-website.module').then(m => m.PublicWebsiteModule),
    pathMatch: "prefix"
  },
  {
    path: 'client',
    component: ClientsAreaComponent,
    loadChildren: () => import('./clients-area/clients-area.module').then(m => m.ClientsAreaModule),
    pathMatch: "prefix"
  },
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
