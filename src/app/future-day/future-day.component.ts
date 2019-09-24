import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-day',
  templateUrl: './future-day.component.html',
  styleUrls: ['./future-day.component.scss']
})
export class FutureDayComponent implements OnInit {

  @Input() dat: string;

  @Input() temp: string;

  @Input() precip: string;

  @Input() hum: string;

  @Input() win: string

  @Input() icon: string

  constructor() { }

  ngOnInit() {
  }

}
