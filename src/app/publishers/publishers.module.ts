import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPublisherComponent } from './components/edit-publisher/edit-publisher.component';
import { AddPublisherComponent } from './components/add-publisher/add-publisher.component';
import { ListPublisherComponent } from './components/list-publisher/list-publisher.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    EditPublisherComponent,
    AddPublisherComponent,
    ListPublisherComponent,
    CapitalizePipe,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
})
export class PublishersModule {}
