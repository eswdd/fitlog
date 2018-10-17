import {Component, Input, OnInit} from '@angular/core';
import {FitlogService} from '../fitlog.service';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../event';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private fitlogService: FitlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadActivity();
  }

  loadActivity(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // new measurement
    if (id === 'new') {
      this.activity = this.fitlogService.newActivity();
    } else { // current measurement
      const existing_id = +id;
      this.fitlogService.getActivity(existing_id).subscribe(m => this.activity = m);
    }
  }

}
