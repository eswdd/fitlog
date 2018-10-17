import {Component, Input, OnInit} from '@angular/core';
import {FitlogService} from '../fitlog.service';
import {ActivatedRoute} from '@angular/router';
import {Workout} from '../event';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {

  @Input() workout: Workout;

  constructor(
    private fitlogService: FitlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadWorkout();
  }

  loadWorkout(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // new workout
    if (id === 'new') {
      this.workout = this.fitlogService.newWorkout();
    } else { // current measurement
      const existing_id = +id;
      this.fitlogService.getWorkout(existing_id).subscribe(m => this.workout = m);
    }
  }

}
