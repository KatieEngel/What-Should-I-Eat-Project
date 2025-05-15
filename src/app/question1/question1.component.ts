import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from "../arrows/arrows.component";


@Component({
  selector: 'app-question1',
  imports: [MatButtonToggleModule, ArrowsComponent],
  template: `
    <main>
      <div class="question-container">
        <h1>SELECT YOUR MEAL</h1>
      </div>
      <div class="meal-choices">
        <input type="radio" id="breakfast" name="meal" />
          <label for="breakfast">BREAKFAST</label>
        <input type="radio" id="lunch" name="meal" />
          <label for="lunch">LUNCH</label>
        <input type="radio" id="dinner" name="meal" />
          <label for="dinner">DINNER</label>
          <input type="radio" id="snack" name="meal" />
          <label for="snack">SNACK</label>
        <input type="radio" id="dessert" name="meal" />
          <label for="dessert">DESSERT</label>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', './question1.component.css'],
})
export class Question1Component {

}
