//import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MonprofilComponent } from './monprofil/monprofil.component';
import { AppRoutingModule } from '../app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { SettingsComponent } from './settings/settings.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {VerticalNavBarComponent} from "./vertical-nav-bar/vertical-nav-bar.component";
import {AuthGuard} from "../_helpers";



const dashboardRoutes: Routes = [
 { path: 'user_dashboard_employe',
  component: DashboardComponent,
     canActivate:[ AuthGuard] ,data: { requiredRole: 'PM' },

     children: [
    {path:'monprofil',component:MonprofilComponent},
    {path:'header', component:HeaderComponent},
    {path: 'vertical-nav-bar', component: VerticalNavBarComponent },
    {path: 'settings',component:SettingsComponent},




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
    CommonModule,
    FontAwesomeModule,
    MatPaginatorModule,

    
    
    
      
      // Import other modules you need

        RouterModule.forChild(dashboardRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        CommonModule,
        FontAwesomeModule,
        // Import other modules you need

        // Configure child routes
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    providers: [],
    exports: [RouterModule]
})
export class DashboardModuleRH_Employee { }
  
