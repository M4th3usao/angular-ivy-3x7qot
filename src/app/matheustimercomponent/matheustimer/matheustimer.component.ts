import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matheustimer',
  templateUrl: './matheustimer.component.html',
  styleUrls: ['./matheustimer.component.css'],
})
export class MatheustimerComponent implements OnInit {
  @Input() name: string;

  private counter: number = 0;

  constructor() {}

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);
  ngOnInit() {}

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }
}
