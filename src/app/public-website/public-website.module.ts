import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicWebsiteComponent } from './public-website.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PublicServicesComponent } from './public-services/public-services.component';
import { RegisterationComponent } from './auth/registeration/registeration.component';
import { AuthComponent } from './auth/auth.component';

const publicRoute: Route[] = [
  {
    path: '',
   pathMatch:'full',
   redirectTo:'/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'services',
    component:PublicServicesComponent,
    loadChildren: () => import('./public-services/public-services.module').then(m => m.PublicServicesModule),
  },
  {
    path: 'auth',
    component:AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }
]

@NgModule({
  declarations: [
    PublicWebsiteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoute),
    SharedModule,
    CarouselModule
  ]
})
export class PublicWebsiteModule { }
