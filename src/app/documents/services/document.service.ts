import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doc } from '../models/document';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Array<Doc>> {
    return this.http.get<Array<Doc>>(environment.apiUrl + 'documents/');
  }

  deleteDocument(document: Doc) {
    return this.http.delete<any>(
      environment.apiUrl + `documents/${document.ISBN}`
    );
  }

  saveDocument(document: Doc): Observable<Doc> {
    return this.http.post<Doc>(environment.apiUrl + `documents/`, {
      ISBN: document.ISBN,
      Title: document.Title,
      Year_Published: document.Year_Published,
      Publisher_ID: document.Publisher_ID,
    });
  }

  updateDocument(document: Doc): Observable<Doc> {
    return this.http.put<Doc>(
      environment.apiUrl + `documents/${document.ISBN}`,
      {
        Title: document.Title,
        Year_Published: document.Year_Published,
        Publisher_ID: document.Publisher_ID,
      }
    );
  }

  searchDocuments(Title: string): Observable<Doc[]> {
    return this.http.get<Doc[]>(environment.apiUrl + `documents/${Title}`);
  }

  searchDocumentById(ISBN: string): Observable<Doc> {
    return this.http.get<Doc>(environment.apiUrl + `documents/search/${ISBN}`);
  }
}
