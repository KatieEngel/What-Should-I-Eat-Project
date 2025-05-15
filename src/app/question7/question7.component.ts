import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';

@Component({
  selector: 'app-question7',
  imports: [ArrowsComponent, MatButtonToggleModule],
  template: `
    <main>
      <div class="question-container">
        <h1>NUMBER OF INGREDIENTS</h1>
      </div>
      <div class="ingredients-choices">
        <input type="radio" id="few" name="meal" />
          <label for="few">A FEW</label>
        <input type="radio" id="many" name="meal" />
          <label for="many">A LOT</label>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', 'question7.component.css']
})
export class Question7Component {

}
