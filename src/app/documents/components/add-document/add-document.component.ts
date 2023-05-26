import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doc } from '../../models/document';
import { DocumentService } from '../../services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css'],
})
export class AddDocumentComponent implements OnInit {
  documentForm!: FormGroup;
  @Input() doc: Doc | undefined;
  constructor(
    private fb: FormBuilder,
    private as: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const docId = params['id'];
    });

    this.documentForm = this.fb.group({
      ISBN: this.fb.control(''),
      Title: this.fb.control(''),
      Year_Published: this.fb.control(''),
      Publisher_ID: this.fb.control(''),
    });
    if (this.doc) {
      this.setDocment(this.doc);
    }
  }

  saveDocument() {
    let document: Doc = this.documentForm.value;
    console.log(document);
    this.as.saveDocument(document).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
        this.router.navigate(['/documents']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setDocment(document: Doc) {
    this.documentForm.patchValue(document);
  }
}
