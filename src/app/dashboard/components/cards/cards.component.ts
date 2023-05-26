import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  authors: number = 0;
  documents: number = 0;
  publishers: number = 0;
  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.service.getAuthorsCount().subscribe((data) => {
      this.authors = data.length;
    });
    this.service.getDocumentsCount().subscribe((data) => {
      this.documents = data.length;
    });
    this.service.getPublishersCount().subscribe((data) => {
      this.publishers = data.length;
    });
  }
}
