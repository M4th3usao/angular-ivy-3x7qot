import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matheusrandom',
  templateUrl: './matheusrandom.component.html',
  styleUrls: ['./matheusrandom.component.css'],
})
export class MatheusrandomComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getAle() {
    return Math.floor(Math.random() * 50 + 1);
  }
}
