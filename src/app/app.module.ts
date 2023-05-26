import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthorsModule } from './authors/authors.module';
import { HttpClientModule } from '@angular/common/http';
import { PublishersModule } from './publishers/publishers.module';
import { DocumentsModule } from './documents/documents.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthorsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PublishersModule,
    DocumentsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
