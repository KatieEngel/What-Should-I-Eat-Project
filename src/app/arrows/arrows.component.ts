import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-arrows',
  imports: [RouterModule],
  template: `
    <div class="arrows-container">
      <div class="btn-container">
        <button class="back-btn" (click)="onClickBack()"><</button>
      </div>
      <div class="btn-container">
        <button class="next-btn" (click)="onClickNext()">></button>
      </div>
    </div>
  `,
  styleUrls: ['../../styles.css', 'arrows.component.css']
})
export class ArrowsComponent {
  currentPage: string;
  questionIndex: number = 1;
  pages: string[] = ['', '/question1', '/question2', '/question3', '/question4', '/question5', '/question6', '/question7', '/results'];
  constructor(private router: Router) {
    this.router = router;
    this.currentPage = this.router.url;
    this.questionIndex = this.pages.indexOf(this.currentPage);
  }
  
  
  onClickBack() {
    if (this.questionIndex > 0) {
      this.questionIndex--;
    }
    console.log(this.questionIndex);
    this.currentPage = this.pages[this.questionIndex];
    this.router.navigate([this.currentPage]);
  }

  onClickNext() {
    if (this.questionIndex < 8) {
      this.questionIndex++;
    }
    console.log(this.questionIndex);
    this.currentPage = this.pages[this.questionIndex];
    this.router.navigate([this.currentPage]);
  }
  
  
}
