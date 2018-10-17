import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import {FitlogService} from '../fitlog.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  selectedEvent: Event;

  constructor(
    private fitlogService: FitlogService
  ) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(): void {
    this.fitlogService.getRecentEvents().subscribe(e => this.events = e);
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  onEdit(event: Event): void {
  }

  onDelete(event: Event): void {
  }

}
