import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupEntrpriseComponent } from './signupentreprise/signupentreprise.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ValidationComponent } from './validation/validation.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { ContactComponent } from './shared/contact/contact.component';
import { CandidatComponent } from './candidat/candidat.component';

import { MyquizComponent } from './myquiz/myquiz.component';
import { JobOpportComponent } from './job-opport/job-opport.component';
import { CandidatemailComponent } from './candidatemail/candidatemail.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
//import { TESTComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { TESTComponent } from './test/test.component';


import { AuthGuard } from './_helpers';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { LoginforgetpasswordComponent } from './loginforgetpassword/loginforgetpassword.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import {Assignements} from './_models/assignements';
const routes: Routes = [

  { path: 'register', component: SignupComponent },
  { path: 'signupentrprise', component: SignupEntrpriseComponent },
  { path: 'verification', component: ValidationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'job', component: JobOpportComponent },
  { path: 'email', component: CandidatemailComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'chatc', component: ChatComponent },
  { path: 'test', component: TESTComponent },







{ path:'candidature',component:CandidatComponent },
  { path: 'resetpassword', component:     ForgetpassComponent
},
{ path: 'forgetpassword', component: LoginforgetpasswordComponent},
{path:'chatroom',component:ChatRoomComponent },
{ path: 'verification', component: ValidationComponent },
  {
    path: '',

    loadChildren: () => import('./admin/admin-layout.module').then(m => m.AdminLayoutModule),

  },
  {
    path: '',
    loadChildren: () => import('./user_dashboardRH_d/DashboardModuleRHd.module').then(m => m.DashboardModuleRHd) ,

  },
  {
    path: '',
    loadChildren: () => import('./user_dashboard_employe/DashboardModuleRH_Employee').then(m => m.DashboardModuleRH_Employee),

  },
  {
    path: '',
    loadChildren: () => import('./user_dashboardRH_w/DashboardModuleRHw.module').then(m => m.DashboardModuleRHw),

  },
  { path:'myquiz/:email',component: MyquizComponent },

  {
    path: '',
      loadChildren: () => import('./user_dashboard_CRM/dashboardCRM.module').then(m => m.DashboardModuleCRM),
  },
  {
    path: '',
    loadChildren: () => import('./user_dashboard_Consultant/dashboardConsultant.module').then(m => m.DashboardConsultantModule),

  },
  { path: 'signin', component: LoginComponent },

{ path: '**', redirectTo: '',component: LandingComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
