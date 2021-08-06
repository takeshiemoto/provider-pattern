import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  template: ` <p>increment-button works!</p> `,
  styles: [],
})
export class IncrementButtonComponent implements OnInit {
  ngOnInit(): void {
    console.log('render: IncrementButton');
  }
}
