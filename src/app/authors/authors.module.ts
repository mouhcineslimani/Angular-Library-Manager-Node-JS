import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';
@NgModule({
  declarations: [AddAuthorComponent, ListAuthorsComponent, EditAuthorComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthorsModule {}
