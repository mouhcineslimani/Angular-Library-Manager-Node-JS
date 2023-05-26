import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent implements OnInit {
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
      this.as.searchAuthorById(authorId).subscribe((a) => {
        this.setAuthor(a);
      });
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

  updateAuthor() {
    let author: Author = this.authorForm.value;
    this.as.updateAuthor(author).subscribe({
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
