import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeOffRaison } from '../_models/time-off-raison';

@Injectable({
  providedIn: 'root',
})
export class TimeOffRaisonService {
  private apiUrl = `${environment.apiUrl}/api/TimeOffRaison`;

  constructor(private http: HttpClient) {}

  getAllTimeOffRaisons(): Observable<TimeOffRaison[]> {
    return this.http.get<TimeOffRaison[]>(`${this.apiUrl}/getAllTimeOffRaisons`);
  }

  getTimeOffRaisonById(id: number): Observable<TimeOffRaison> {
    return this.http.get<TimeOffRaison>(`${this.apiUrl}/getTimeOffRaisonById/${id}`);
  }

  addTimeOffRaison(raison: TimeOffRaison): Observable<TimeOffRaison> {
    return this.http.post<TimeOffRaison>(`${this.apiUrl}/addTimeOffRaison`, raison);
  }

  editTimeOffRaison(id: number, updatedRaison: TimeOffRaison): Observable<TimeOffRaison> {
    return this.http.put<TimeOffRaison>(`${this.apiUrl}/editTimeOffRaisonByID/${id}`, updatedRaison);
  }

  deleteTimeOffRaison(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteTimeOffRaisonById/${id}`);
  }
}
