import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title-screen',
  imports: [RouterLink],
  template: `
    <h1>What Should I Eat?</h1>
    <div class="btn-container">
      <button routerLink="/question1">Click to Start</button>
    </div>
  `,
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent {

}
