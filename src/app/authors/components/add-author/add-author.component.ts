import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  authorForm!: FormGroup;
  @Input() author: Author | undefined;
  constructor(
    private fb: FormBuilder,
    private as: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const authorId = params['id'];
    });

    this.authorForm = this.fb.group({
      Au_ID: this.fb.control(''),
      Author: this.fb.control(''),
      Year_Born: this.fb.control(''),
    });
    if (this.author) {
      this.setAuthor(this.author);
    }
  }

  saveAuthor() {
    let author: Author = this.authorForm.value;
    console.log(author);
    this.as.saveAuthor(author).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
        this.router.navigate(['/authors']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setAuthor(author: Author) {
    this.authorForm.patchValue(author);
  }
}
