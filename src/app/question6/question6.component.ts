import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';

@Component({
  selector: 'app-question6',
  imports: [ArrowsComponent, MatButtonToggleModule],
  template: `
    <main>
      <div class="question-container">
        <h1>EASY OR COMPLEX</h1>
      </div>
      <div class="steps-choices">
        <input type="radio" id="easy" name="meal" />
          <label for="easy">EASY</label>
        <input type="radio" id="complex" name="meal" />
          <label for="complex">COMPLEX</label>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', 'question6.component.css']
})
export class Question6Component {

}
