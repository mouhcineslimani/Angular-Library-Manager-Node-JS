import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css'],
})
export class ListAuthorsComponent implements OnInit {
  authors: Array<Author> = [];
  localAuthors: Array<Author> = [];
  Author?: string = '';
  selectedAuthor: Author | undefined;
  constructor(private as: AuthorService) {}
  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.as.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.localAuthors = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleDelete(author: Author) {
    this.as.deleteAuthor(author).subscribe({
      next: (value) => {
        this.getAuthors();
        this.localAuthors = this.authors.filter((a) => a.Au_ID != author.Au_ID);
      },
    });
  }

  searchAuthors() {
    if (this.Author?.length == 0) this.localAuthors = this.authors;
    else
      this.as.searchAuthors(this.Author!).subscribe({
        next: (d) => {
          this.localAuthors = d;
        },
      });
  }
}
