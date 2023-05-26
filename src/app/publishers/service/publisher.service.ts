import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../model/publisher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(private http: HttpClient) {}

  public getPublishers(): Observable<Array<Publisher>> {
    return this.http.get<Array<Publisher>>(environment.apiUrl + 'publishers/');
  }

  public deletePublisher(publisher: Publisher) {
    return this.http.delete<any>(
      environment.apiUrl + `publishers/${publisher.Publisher_ID}`
    );
  }

  savePublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.post<Publisher>(environment.apiUrl + `publishers/`, {
      Publisher_ID: publisher.Publisher_ID,
      Name: publisher.Name,
      Company: publisher.Company,
    });
  }

  updatePublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.put<Publisher>(
      environment.apiUrl + `publishers/${publisher.Publisher_ID}`,
      {
        Name: publisher.Name,
        Company: publisher.Company,
      }
    );
  }

  searchPublishers(publisher: string): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(
      environment.apiUrl + `publishers/${publisher}`
    );
  }

  searchPublisherById(Publisher_ID: number): Observable<Publisher> {
    return this.http.get<Publisher>(
      environment.apiUrl + `publishers/search/${Publisher_ID}`
    );
  }
}
