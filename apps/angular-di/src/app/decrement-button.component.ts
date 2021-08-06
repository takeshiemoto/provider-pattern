import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrement-button',
  template: ` <p>decrement-button works!</p> `,
  styles: [],
})
export class DecrementButtonComponent implements OnInit {
  ngOnInit(): void {
    console.log('render DecrementButton');
  }
}
