import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Publisher } from '../../model/publisher';
import { PublisherService } from '../../service/publisher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css'],
})
export class EditPublisherComponent implements OnInit {
  publisherForm!: FormGroup;
  @Input() publisher: Publisher | undefined;

  constructor(
    private fb: FormBuilder,
    private as: PublisherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const publisherId = params['id'];
      this.as.searchPublisherById(publisherId).subscribe((p) => {
        this.setPublisher(p);
      });
    });

    this.publisherForm = this.fb.group({
      Publisher_ID: this.fb.control(''),
      Name: this.fb.control(''),
      Company: this.fb.control(''),
    });
    if (this.publisher) {
      this.setPublisher(this.publisher);
    }
  }

  updatePublisher() {
    let publisher: Publisher = this.publisherForm.value;
    this.as.updatePublisher(publisher).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
        this.router.navigate(['/publishers']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setPublisher(publisher: Publisher) {
    this.publisherForm.patchValue(publisher);
  }
}
