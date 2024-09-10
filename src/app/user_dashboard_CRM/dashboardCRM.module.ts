// import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MonprofilComponent } from './monprofil/monprofil.component';
import { SettingsComponent } from './settings/settings.component';
import { VerticalNavBarComponent } from './vertical-nav-bar/vertical-nav-bar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common'; // Import DatePipe from @angular/common
import { DetailNotifDiagComponent } from './header/detail-notif-diag/detail-notif-diag.component';
import { CardComponent } from './solution/card/card.component';
import {AuthGuard} from "../_helpers";
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { RequestTimeOffComponent } from './request-time-off/request-time-off.component';
const dashboardRoutes: Routes = [
 { path: 'user_dashboard_CRM',
  component: DashboardComponent,
  children: [
    {path:'monprofil',component:MonprofilComponent},
    {path:'header', component:HeaderComponent},
    {path: 'vertical-nav-bar', component: VerticalNavBarComponent },
    {path: 'settings',component:SettingsComponent},
    {path: 'UserDetails',component:UserDetailsComponentComponent},
    {path: 'RequestTimeOff',component:RequestTimeOffComponent},




   


  ],
  },
  ];
    
  
  
  @NgModule({
    declarations: [
      HeaderComponent,
      DashboardComponent,
      SettingsComponent,
      VerticalNavBarComponent,
      MonprofilComponent,
      DetailNotifDiagComponent,
      CardComponent,
      UserDetailsComponentComponent,
      RequestTimeOffComponent,
      
      
    ],
    imports: [
      
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    CommonModule,    FontAwesomeModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    //MatButtonModule,
    MatPaginatorModule,

      
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
     // { provide: MAT_DATE_LOCALE, useValue: 'en-US' } ,
        { provide: DatePipe}  
    ],
    exports: [RouterModule]
  })
  export class DashboardModuleCRM { }
