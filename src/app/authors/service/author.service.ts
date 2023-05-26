import { Author } from './../models/author';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  public getAuthors(): Observable<Array<Author>> {
    return this.http.get<Array<Author>>(environment.apiUrl + 'authors/');
  }

  public deleteAuthor(author: Author) {
    return this.http.delete<any>(
      environment.apiUrl + `authors/${author.Au_ID}`
    );
  }

  saveAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(environment.apiUrl + `authors/`, {
      Au_ID: author.Au_ID,
      Author: author.Author,
      Year_Born: author.Year_Born,
    });
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(
      environment.apiUrl + `authors/${author.Au_ID}`,
      {
        Author: author.Author,
        Year_Born: author.Year_Born,
      }
    );
  }

  searchAuthors(Author: string): Observable<Author[]> {
    return this.http.get<Author[]>(environment.apiUrl + `authors/${Author}`);
  }

  searchAuthorById(Au_ID: number): Observable<Author> {
    return this.http.get<Author>(
      environment.apiUrl + `authors/search/${Au_ID}`
    );
  }
}
