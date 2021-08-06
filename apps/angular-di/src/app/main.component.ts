import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<app-counter></app-counter>`,
  styles: [],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    console.log('render: Main');
  }
}
