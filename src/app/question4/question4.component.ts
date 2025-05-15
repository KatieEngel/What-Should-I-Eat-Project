import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';

@Component({
  selector: 'app-question4',
  imports: [ArrowsComponent, MatButtonToggleModule],
  template: `
    <main>
      <div class="question-container">
        <h1>COOK OR EAT OUT</h1>
      </div>
      <div class="cook-choices">
        <input type="radio" id="cook" name="meal" />
          <label for="cook">COOK</label>
        <input type="radio" id="go-out" name="meal" />
          <label for="go-out">GO OUT</label>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', 'question4.component.css']
})
export class Question4Component {

}
