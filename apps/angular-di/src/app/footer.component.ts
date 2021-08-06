import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <p>footer works!</p> `,
  styles: [],
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    console.log('render: Footer');
  }
}
