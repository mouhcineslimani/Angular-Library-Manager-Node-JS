import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PublisherService } from '../../service/publisher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Publisher } from '../../model/publisher';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css'],
})
export class AddPublisherComponent implements OnInit {
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
      const apublisherId = params['id'];
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

  savePublisher() {
    let publisher: Publisher = this.publisherForm.value;
    this.as.savePublisher(publisher).subscribe({
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
