import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-view',
  template: ` <div>Hello counter</div> `,
  styles: [],
})
export class CounterViewComponent implements OnInit {
  ngOnInit(): void {
    console.log('render: CounterView');
  }
}
