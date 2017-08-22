import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DiversityComponent } from './diversity/diversity.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'assessment',
    component: AssessmentComponent
  },
  {
    path: 'diversity',
    component: DiversityComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
