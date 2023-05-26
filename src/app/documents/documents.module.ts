import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncateTitleDirective } from './directives/truncate-title.directive';

@NgModule({
  declarations: [
    ListDocumentsComponent,
    EditDocumentComponent,
    AddDocumentComponent,
    TruncateTitleDirective,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class DocumentsModule {}
