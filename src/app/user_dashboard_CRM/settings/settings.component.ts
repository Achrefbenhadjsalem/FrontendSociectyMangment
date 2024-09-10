import { Component, OnInit, ViewChild } from '@angular/core';

import { ListeUserAscService } from 'src/app/user_dashboard_CRM/settings/liste-user-asc.service';

import { SalesActivity, Status } from 'src/app/_models/ActivitySalesTeam';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivitySalesTeamService } from 'src/app/_services/activity-sales-team.service';
import { ActivatedRoute } from '@angular/router';
import { Repertoire } from 'src/app/_models/Repertoire';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  
 
  displayedColumns: string[] = ['repertoire', 'status' ,'heureStart', 'heureEnd', 'description', 'typeAct', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  user:any[];
  data: SalesActivity;
  activitySalesTeamProspecting: SalesActivity[] = [];
  activitySalesTeamNegotiation: SalesActivity[] = [];
  activitySalesTeamClosing: SalesActivity[] = []; 
  selectedTab: string = '';
  
  repertoire: Repertoire[] = [];
  

  constructor( private _dialog: MatDialog, private activityService: ActivitySalesTeamService, private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
    this.route.fragment.subscribe(fragment => {
      this.selectedTab = fragment || 'Prospecting';
    });

  }

 
  }


  
  


