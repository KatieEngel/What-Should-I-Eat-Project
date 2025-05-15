import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-question5',
  imports: [ArrowsComponent, MatButtonToggleModule, PieChartComponent],
  template: `
    <main>
      <div class="question-container">
        <h1>HOW LONG CAN YOU WAIT?</h1>
      </div>
      <div class="time-choices">
        <app-pie-chart></app-pie-chart>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', 'question5.component.css']
})
export class Question5Component {

}
