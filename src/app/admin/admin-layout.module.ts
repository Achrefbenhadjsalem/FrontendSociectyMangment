import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { DashboardComponent } from './admindashboard/admindashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './adminnavbar/adminnavbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { QuestionComponent } from './admindashboard/question/question.component';
import { AjouterquizComponent } from './admindashboard/ajouterquiz/ajouterquiz.component';
import { UpdatequizComponent } from './admindashboard/updatequiz/updatequiz.component';
import { QuizComponent } from './admindashboard/quiz/quiz.component';
import { MatTableModule } from '@angular/material/table';
import { QuestionsComponent } from './admindashboard/questions/questions.component';
import { UpdatequestionComponent } from './admindashboard/updatequestion/updatequestion.component';
import { JobsComponent } from './admindashboard/jobs/jobs.component';

import { UpdatejobdComponent } from './admindashboard/updatejobd/updatejobd.component';
import { AddjobsComponent } from './admindashboard/addjobs/addjobs.component';
import { EntretienComponent } from './admindashboard/entretien/entretien.component';

import { GroupChatComponent } from './group-chat/group-chat.component';
import { CardGPCHATComponent } from './card-gpchat/card-gpchat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from './group-chat/update-dialog/update-dialog.component';
import { NotifDialogComponent } from './notifications/notif-dialog/notif-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import {AuthGuard} from "../_helpers";
const AdminLayoutRoutes: Routes = [
  {path:'admin',
component:AdminLayoutComponent,canActivate:[ AuthGuard] ,data: { requiredRole: 'ADMIN' },

children: [
   { path: 'admindashboard',      component: DashboardComponent },
   { path: 'user-profile',   component: UserProfileComponent },
   { path: 'table-list',     component: TableListComponent },
   { path: 'notifications',  component: NotificationsComponent },
   { path: 'navbar',  component: NavbarComponent },
   { path: 'sidenavbar',  component: SidebarComponent },
   { path: 'ajouterquiz',  component: AjouterquizComponent },
   { path: 'questions',  component: QuestionsComponent },
   { path: 'updatequiz',  component: UpdatequizComponent },
   { path: 'quiz',  component: QuizComponent },
   { path: 'jobs',  component: JobsComponent },
    //{ path: 'RoomConfiguration', component: RoomConfigurationComponent },

   { path: 'ChatRooms',  component: GroupChatComponent },
]}





];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(AdminLayoutRoutes),
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    MatSelectModule,
    MatTooltipModule,
    MatTableModule ,
    MatDialogModule,
   MatPaginatorModule,

    MatStepperModule,

  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationsComponent,
    QuestionComponent,
    AjouterquizComponent,
    UpdatequizComponent,
    QuizComponent,
    QuestionsComponent,
    UpdatequestionComponent,
    JobsComponent,

    UpdatejobdComponent,
    AddjobsComponent,
    EntretienComponent,

    GroupChatComponent,
    CardGPCHATComponent,
    UpdateDialogComponent,
    NotifDialogComponent,
    
  ],
  providers: [],
  exports: [RouterModule],
})
export class AdminLayoutModule {}
