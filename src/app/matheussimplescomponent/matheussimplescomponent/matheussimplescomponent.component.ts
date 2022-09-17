import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matheussimplescomponent',
  templateUrl: './matheussimplescomponent.component.html',
  styleUrls: ['./matheussimplescomponent.component.css'],
})
export class MatheussimplescomponentComponent implements OnInit {
  @Input() J: String;
  @Input() c: String;
  @Input() i: String;
  @Input() t: String;

  constructor() {}

  ngOnInit() {}

  getJuros() {
    return Number(this.c) * Number(this.i) * Number(this.t);
  }
}
