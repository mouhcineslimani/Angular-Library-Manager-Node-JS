import { Publisher } from './../../model/publisher';
import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-list-publisher',
  templateUrl: './list-publisher.component.html',
  styleUrls: ['./list-publisher.component.css'],
})
export class ListPublisherComponent implements OnInit {
  publishers: Array<Publisher> = [];
  localPublishers: Array<Publisher> = [];
  publisherName?: string = '';
  constructor(private as: PublisherService) {}
  ngOnInit(): void {
    this.getPublishers();
  }

  getPublishers() {
    this.as.getPublishers().subscribe({
      next: (data) => {
        this.publishers = data;
        this.localPublishers = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleDelete(publisher: Publisher) {
    this.as.deletePublisher(publisher).subscribe({
      next: (value) => {
        this.localPublishers = this.publishers.filter(
          (a) => a.Publisher_ID != publisher.Publisher_ID
        );
      },
    });
  }

  searchPublishers() {
    if (this.publisherName?.length == 0) this.localPublishers = this.publishers;
    else
      this.as.searchPublishers(this.publisherName!).subscribe({
        next: (d) => {
          this.localPublishers = d;
          console.log(d);
        },
      });
  }
}
