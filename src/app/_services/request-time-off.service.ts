import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTimeOff } from '../_models/request-time-off';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestTimeOffService {
  private apiUrl = `${environment.apiUrl}/api/RequestTimeOff`;

  constructor(private http: HttpClient) {}

  // Récupérer le jeton à partir de localStorage ou sessionStorage
  private getToken(): string | null {
    return localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  }

  // Attacher le jeton aux en-têtes des requêtes
  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,  // Utilisation correcte du template literal
      'Content-Type': 'application/json',
    });
  }

  getAllRequestTimeOff(): Observable<RequestTimeOff[]> {
    return this.http.get<RequestTimeOff[]>(`${this.apiUrl}/getAllRequestTimeOff`, { headers: this.getAuthHeaders() });
  }

  getRequestTimeOffById(id: number): Observable<RequestTimeOff> {
    return this.http.get<RequestTimeOff>(`${this.apiUrl}/getRequestTimeOffById/${id}`, { headers: this.getAuthHeaders() });
  }

  addRequestTimeOff(request: RequestTimeOff, timeOffRaisonId: number): Observable<RequestTimeOff> {
    return this.http.post<RequestTimeOff>(`${this.apiUrl}/addRequestTimeOff/${timeOffRaisonId}`, request, { headers: this.getAuthHeaders() });
  }

  editRequestTimeOff(id: number, updatedRequest: RequestTimeOff): Observable<RequestTimeOff> {
    return this.http.put<RequestTimeOff>(`${this.apiUrl}/editRequestTimeOffByID/${id}`, updatedRequest, { headers: this.getAuthHeaders() });
  }

  deleteRequestTimeOff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteRequestTimeOffById/${id}`, { headers: this.getAuthHeaders() });
  }

  getRequestTimeOffByUser(username: string): Observable<RequestTimeOff[]> {
    return this.http.get<RequestTimeOff[]>(`${this.apiUrl}/getRequestTimeOffByUser/${username}`, { headers: this.getAuthHeaders() });
  }

  getRequestTimeOffForCurrentUser(): Observable<RequestTimeOff[]> {
    return this.http.get<RequestTimeOff[]>(`${this.apiUrl}/current-user-time-off`, {
      headers: this.getAuthHeaders()
    });
  }
}
