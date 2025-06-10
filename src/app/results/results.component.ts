import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [RouterModule],
  template: `
    <main>
      <div class="results-container">
        <h1>RESULTS</h1>
      </div>
      <div class="results-content-container">
        <div class="results-content">
          <h2>Here's what you should eat based on your answers:</h2>
          <div class="results-meal">
            <p>Meal: Breakfast</p>
            <p>Description: Eggs, bacon, and fruit will suit your preferences perfectly!</p>
          </div>
        </div>
        <button class="restart-button" [routerLink]="['']">RESTART</button>
      </div>
    </main>
  `,
  styleUrls: ['../../styles.css', 'results.component.css']
})
export class ResultsComponent {

}
