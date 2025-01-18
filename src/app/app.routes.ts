import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/question/question.component';

export const appRoutes: Routes = [  // Usa 'appRoutes' aquí
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent }
];
