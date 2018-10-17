import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {MeasurementDetailComponent} from './measurement-detail/measurement-detail.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';
import {WorkoutDetailComponent} from './workout-detail/workout-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // todo: stats
  { path: 'measurement/:id', component: MeasurementDetailComponent },
  { path: 'activity/:id', component: ActivityDetailComponent },
  { path: 'workout/:id', component: WorkoutDetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
