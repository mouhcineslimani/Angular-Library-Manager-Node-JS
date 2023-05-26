import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MasterpageComponent } from './pages/masterpage/masterpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';

Chart.register(...registerables);
@NgModule({
  declarations: [
    MasterpageComponent,
    DashboardComponent,
    ChartjsComponent,
    SidebarComponent,
    ChartjsComponent,
    CardComponent,
    CardsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [MasterpageComponent],
})
export class DashboardModule {}
