import {Activity, Measurement, Workout, Event} from './event';
import * as moment from 'moment';

export const EVENTS: Event[] = [
  new Activity(4, moment('2018-03-18')),
  new Activity(3, moment('2018-03-17')),
  new Measurement(2, moment('2018-03-16'), 'Weight', 95, 'kg'),
  new Workout(1, moment('2018-03-15')),
];
