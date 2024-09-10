import { Component, OnInit } from '@angular/core';
import { RequestTimeOff } from 'src/app/_models/request-time-off';
import { AccountService } from 'src/app/_services';
import { RequestTimeOffService } from 'src/app/_services/request-time-off.service';

@Component({
  selector: 'app-request-time-off',
  templateUrl: './request-time-off.component.html',
  styleUrls: ['./request-time-off.component.css']
})
export class RequestTimeOffComponent implements OnInit {
  requestTimeOffList: RequestTimeOff[] = [];
  filteredRequests: RequestTimeOff[] = [];
  searchTerm: string = '';  // Pour le champ de recherche

  constructor(
    private requestTimeOffService: RequestTimeOffService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loadRequestTimeOffForCurrentUser();
  }

  loadRequestTimeOffForCurrentUser(): void {
    this.accountService.getCurrentUserInfo().subscribe({
      next: (user) => {
        if (user?.username) {
          this.requestTimeOffService.getRequestTimeOffByUser(user.username).subscribe(
            (data: RequestTimeOff[]) => {
              this.requestTimeOffList = data;
              this.filteredRequests = data; // Initialiser la liste filtrée avec toutes les demandes
            },
            (error) => {
              console.error('Erreur lors de la récupération des demandes de congé :', error);
            }
          );
        }
      },
      error: (err) => {
        console.error('Failed to load user details', err);
      }
    });
  }

  // Méthode de filtrage pour rechercher dans les demandes
  filterRequests(): void {
    if (this.searchTerm) {
      this.filteredRequests = this.requestTimeOffList.filter(request =>
        request.statuRequest.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.startDate.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredRequests = [...this.requestTimeOffList];  // Réinitialiser la liste si aucun filtre n'est appliqué
    }
  }
}