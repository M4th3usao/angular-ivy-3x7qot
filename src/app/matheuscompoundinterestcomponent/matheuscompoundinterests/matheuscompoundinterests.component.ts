import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matheuscompoundinterests',
  templateUrl: './matheuscompoundinterests.component.html',
  styleUrls: ['./matheuscompoundinterests.component.css'],
})
export class MatheuscompoundinterestsComponent implements OnInit {
  @Input() M: String;
  @Input() c: String;
  @Input() i: String;
  @Input() t: String;

  constructor() {}

  ngOnInit() {}

  getJurosComp() {
    return Number(this.c) * (1 * Number(this.i)) ** Number(this.t);
  }
}
