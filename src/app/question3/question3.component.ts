import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';

@Component({
  selector: 'app-question3',
  imports: [ArrowsComponent, MatButtonToggleModule],
  template: `
    <main>
      <div class="question-container">
        <h1>WHAT ARE YOU CRAVING</h1>
      </div>
      <div class="craving-choices">
        <input type="checkbox" id="sweet" name="craving" />
          <label for="sweet">SWEET</label>
        <input type="checkbox" id="salty" name="craving" />
          <label for="salty">SALTY</label>
        <input type="checkbox" id="savory" name="craving" />
          <label for="savory">SAVORY</label>
        <input type="checkbox" id="spicy" name="craving" />
          <label for="spicy">SPICY</label>
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css', 'question3.component.css']
})
export class Question3Component {

}
