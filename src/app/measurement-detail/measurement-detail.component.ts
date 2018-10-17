import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Measurement} from '../event';
import {FitlogService} from '../fitlog.service';

@Component({
  selector: 'app-measurement-detail',
  templateUrl: './measurement-detail.component.html',
  styleUrls: ['./measurement-detail.component.css']
})
export class MeasurementDetailComponent implements OnInit {

  @Input() measurement: Measurement;

  constructor(
    private fitlogService: FitlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMeasurement();
  }

  loadMeasurement(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // new measurement
    if (id === 'new') {
      this.measurement = this.fitlogService.newMeasurement();
    } else { // current measurement
      const existing_id = +id;
      this.fitlogService.getMeasurement(existing_id).subscribe(m => this.measurement = m);
    }
  }

}
