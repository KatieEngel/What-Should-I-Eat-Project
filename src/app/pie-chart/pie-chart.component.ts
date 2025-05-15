import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  imports: [],
  template: `
    <div class="pie-chart-container">
      <canvas id="PieChart">{{ chart }}</canvas>
    </div>
  `,
  styles: ``
})
export class PieChartComponent {
  public config: any = {
    type: 'pie',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
  };
  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('PieChart', this.config);
  }

}
