import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ZumbaTraining {
  id?: number;
  title: string;
  instructor: string;
  dateTime: string;      // ISO string
  durationMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class ZumbaTrainingService {

  private apiUrl = 'http://localhost:8080/api/zumba-trainings';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ZumbaTraining[]> {
    return this.http.get<ZumbaTraining[]>(this.apiUrl);
  }

  create(zumbaClass: ZumbaTraining): Observable<ZumbaTraining> {
    return this.http.post<ZumbaTraining>(this.apiUrl, zumbaClass);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
