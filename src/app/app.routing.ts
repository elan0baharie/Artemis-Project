import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'assessment',
    component: AssessmentComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
