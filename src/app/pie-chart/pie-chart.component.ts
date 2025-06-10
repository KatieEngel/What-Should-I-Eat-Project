import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import plugin from 'chartjs-plugin-datalabels';
Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-pie-chart',
  imports: [],
  template: `
    <div class="pie-chart-container">
      <canvas id="PieChart">{{ chart }}</canvas>
    </div>
  `,
  styleUrls: ['../../styles.css', 'pie-chart.component.css']
})
export class PieChartComponent {
  public config: any = {
    type: 'pie',
    data: {
      labels: [
        '<10',
        '10-20',
        '20-30',
        '30-40',
        '>40'],
      datasets: [{
        data: [10, 10, 10, 10, 20],
        backgroundColor: [
          'rgb(210, 245, 244)',
          'rgb(130, 251, 188)',
          'rgb(234, 240, 148)',
          'rgb(251, 217, 130)',
          'rgb(240, 148, 148)'
        ],
      }]
    },
    options: {
      responsiveness: true,
      maintainAspectRatio: false,
      animation: false,
      
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: {
          display: false,
        },
        datalabels: {
          display: true,
          color: '#481C0F',
          formatter: (value: any, context: any) => {
            return context.chart.data.labels[context.dataIndex];
          },
          font: {
            family: "Arial", // Or your desired font family
            size: 16, // Or your desired font size
            style: 'normal', // Or 'italic', etc.
            weight: 400, // Or 'normal', etc.
          }
        },
      },
    },
  };
  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('PieChart', this.config);
  }

}
