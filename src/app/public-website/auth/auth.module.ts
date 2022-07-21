import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthVerifyPhoneComponent } from './auth-verify-phone/auth-verify-phone.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'
  },
  {
    path: 'register',
    component: RegisterationComponent,
    loadChildren: () => import('./registeration/registeration.module').then(m => m.RegisterationModule),
  },
  {
    path: 'verify-phone',
    component: AuthVerifyPhoneComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [
    AuthComponent,
    AuthVerifyPhoneComponent,
    ForgetPasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
