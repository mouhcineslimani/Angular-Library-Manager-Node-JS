import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ChartjsComponent } from './dashboard/components/chartjs/chartjs.component';
import { ListAuthorsComponent } from './authors/components/list-authors/list-authors.component';
import { AddAuthorComponent } from './authors/components/add-author/add-author.component';
import { EditAuthorComponent } from './authors/components/edit-author/edit-author.component';
import { ListPublisherComponent } from './publishers/components/list-publisher/list-publisher.component';
import { AddPublisherComponent } from './publishers/components/add-publisher/add-publisher.component';
import { EditPublisherComponent } from './publishers/components/edit-publisher/edit-publisher.component';
import { ListDocumentsComponent } from './documents/components/list-documents/list-documents.component';
import { AddDocumentComponent } from './documents/components/add-document/add-document.component';
import { EditDocumentComponent } from './documents/components/edit-document/edit-document.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'authors',
    component: ListAuthorsComponent,
  },
  {
    path: 'authors/add',
    component: AddAuthorComponent,
  },
  {
    path: 'authors/:id/edit',
    component: EditAuthorComponent,
  },
  {
    path: 'documents',
    component: ListDocumentsComponent,
  },
  {
    path: 'documents/add',
    component: AddDocumentComponent,
  },
  {
    path: 'documents/:id/edit',
    component: EditDocumentComponent,
  },
  {
    path: 'publishers',
    component: ListPublisherComponent,
  },
  {
    path: 'publishers/add',
    component: AddPublisherComponent,
  },
  {
    path: 'publishers/:id/edit',
    component: EditPublisherComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
