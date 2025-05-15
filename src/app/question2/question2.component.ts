import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ArrowsComponent } from '../arrows/arrows.component';

@Component({
  selector: 'app-question2',
  imports: [ArrowsComponent, MatButtonToggleModule],
  template: `
    <main>
      <div class="question-container">
        <h1>HOW HUNGRY ARE YOU</h1>
      </div>
      <div class="hunger-container">
        like a five star rating system thing
      </div>
      <app-arrows></app-arrows>
    </main>
  `,
  styleUrls: ['../../styles.css']
})
export class Question2Component {

}
