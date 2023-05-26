import { Component, OnInit } from '@angular/core';
import { Doc } from '../../models/document';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css'],
})
export class ListDocumentsComponent implements OnInit {
  documents: Array<Doc> = [];
  localDocuments: Array<Doc> = [];
  title?: string = '';
  constructor(private as: DocumentService) {}
  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.as.getDocuments().subscribe({
      next: (data) => {
        this.documents = data;
        this.localDocuments = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleDelete(document: Doc) {
    this.as.deleteDocument(document).subscribe({
      next: (value: any) => {
        const data = value.json();
        this.getDocuments();
        this.localDocuments = this.documents.filter(
          (d) => d.ISBN != document.ISBN
        );
        alert(JSON.stringify(this.localDocuments));
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  searchDocuments() {
    if (this.title?.length == 0) this.localDocuments = this.documents;
    else
      this.as.searchDocuments(this.title!).subscribe({
        next: (d) => {
          this.localDocuments = d;
        },
      });
  }

  truncate(title: string): boolean {
    return title.length > 10 ? true : false;
  }
}
