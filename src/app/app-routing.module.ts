import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWebsiteComponent } from './public-website/public-website.component';

const routes: Routes = [
  {
    path: '',
    component: PublicWebsiteComponent,
    loadChildren: () => import('./public-website/public-website.module').then(m => m.PublicWebsiteModule),
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
