import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/Date';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Author } from 'src/app/authors/models/author';
import { Doc } from 'src/app/documents/models/document';
import { Publisher } from 'src/app/publishers/model/publisher';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  // calling of api ( nodejs )

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(environment.apiUrl + 'publishers/statistics');
  }

  getAuthorsCount(): Observable<Author[]> {
    return this.http.get<Author[]>(environment.apiUrl + 'authors');
  }

  getDocumentsCount(): Observable<Doc[]> {
    return this.http.get<Doc[]>(environment.apiUrl + 'documents');
  }

  getPublishersCount(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(environment.apiUrl + 'publishers');
  }
}
