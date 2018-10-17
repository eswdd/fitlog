import {Moment} from 'moment';


export class Event {
  id: number;
  event_type: string;
  event_date: Moment;
  protected constructor(id: number, event_type: string, event_date: Moment) {
    this.id = id;
    this.event_type = event_type;
    this.event_date = event_date;
  }
}

export class Activity extends Event {
  constructor(id: number, event_date: Moment) {
    super(id, 'activity', event_date);
  }
}

export class Workout extends Event {
  constructor(id: number, event_date: Moment) {
    super(id, 'workout', event_date);
  }
}

export class Measurement extends Event {
  name: string;
  value: number;
  unit: string;
  constructor(id: number, event_date: Moment, name: string, value: number, unit: string) {
    super(id, 'measurement', event_date);
    this.name = name;
    this.value = value;
    this.unit = unit;
  }
}

