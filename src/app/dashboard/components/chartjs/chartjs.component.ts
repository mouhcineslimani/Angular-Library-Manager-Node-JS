import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from '../../service/dashboard.service';
import { Data } from '../../models/Date';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css'],
})
export class ChartjsComponent implements OnInit {
  name: string = 'mouhcine';

  constructor(private service: DashboardService) {}
  ngOnInit(): void {}

  ctx: any;
  config: any;

  ngAfterViewInit(): void {
    this.service.getData().subscribe((d) => {
      this.ctx = document.getElementById('myId');
      this.config = {
        type: 'line',
        data: {
          labels: d.map((item) => item.Name), // Utilisez le tableau des auteurs comme labels sur l'axe des abscisses
          datasets: [
            {
              label: 'Nombres de documents édités',
              data: d.map((item) => item.number), // Utilisez le tableau des nombres pour les données sur l'axe des ordonnées
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 20,
              },
            },
          },
        },
      };
      const myChart = new Chart(this.ctx, this.config);
    });
  }
}
