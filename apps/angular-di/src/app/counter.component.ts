import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<app-counter-view></app-counter-view>
    <app-increment-button></app-increment-button>
    <app-decrement-button></app-decrement-button> `,
  styles: [],
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    console.log('render: Counter');
  }
}
