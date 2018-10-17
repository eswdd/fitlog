import { Injectable } from '@angular/core';
import { Activity, Measurement, Workout, Event } from './event';
import { Observable, of } from 'rxjs';
import { EVENTS } from './mock-events';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FitlogService {

  private readonly measurements: Map<number, Measurement>;
  private readonly activities: Map<number, Activity>;
  private readonly workouts: Map<number, Workout>;
  private next_id: number;

  constructor() {
    this.measurements = new Map();
    this.activities = new Map();
    this.workouts = new Map();

    let max_id = 0;
    for (let i = 0; i < EVENTS.length; i++) {
      const id = EVENTS[i].id;
      max_id = Math.max(max_id, id);
      if (EVENTS[i].event_type === 'measurement') {
        this.measurements.set(id, EVENTS[i] as Measurement);
      } else if (EVENTS[i].event_type === 'activity') {
        this.activities.set(id, EVENTS[i] as Activity);
      } else if (EVENTS[i].event_type === 'workout') {
        this.workouts.set(id, EVENTS[i] as Workout);
      } else {
        // whoops?
      }
    }

    this.next_id = max_id + 1;
  }

  getMeasurement(id: number): Observable<Measurement> {
    return of(this.measurements.get(id));
  }

  getActivity(id: number): Observable<Activity> {
    return of(this.activities.get(id));
  }

  getWorkout(id: number): Observable<Workout> {
    return of(this.workouts.get(id));
  }

  newMeasurement(): Measurement {
    const id = this.next_id++;
    const ret = new Measurement(id, moment(), '', 0, '');
    this.measurements[id] = ret;
    return ret;
  }

  getRecentEvents(): Observable<Event[]> {
    const events: Array<Event> = [];
    this.measurements.forEach((measurement: Measurement) => { events.push(measurement); });
    this.activities.forEach((activity: Activity) => { events.push(activity); });
    this.workouts.forEach((workout: Workout) => { events.push(workout); });
    console.log('Now have ' + events.length + ' events to return');
    return of(events);
  }
}
