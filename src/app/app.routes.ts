import { Routes } from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    {
        path: '',
        component: TitleScreenComponent
    },
    {
        path: 'question1',
        component: Question1Component
    },
    {
        path: 'question2',
        component: Question2Component
    },
    {
        path: 'question3',
        component: Question3Component
    },
    {
        path: 'question4',
        component: Question4Component
    },
    {
        path: 'question5',
        component: Question5Component
    },
    {
        path: 'question6',
        component: Question6Component
    },
    {
        path: 'question7',
        component: Question7Component
    },
    {
        path: 'results',
        component: ResultsComponent
    }
];
