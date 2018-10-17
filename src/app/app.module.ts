import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatInputModule } from '@angular/material';

import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';

import * as _moment from 'moment';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './event-list/event-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { MeasurementDetailComponent } from './measurement-detail/measurement-detail.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { FormsModule } from '@angular/forms';
import {FitlogService} from './fitlog.service';
const moment = _moment;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventListComponent,
    ActivityDetailComponent,
    MeasurementDetailComponent,
    WorkoutDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    FitlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
