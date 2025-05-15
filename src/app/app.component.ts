import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'What Should I Eat?';
}
