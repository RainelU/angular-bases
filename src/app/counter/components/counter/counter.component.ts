import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // template: `<h1>Hola Counter</h1>`, //Mandatory use with a HTML code short
  templateUrl: './counter.component.html', //Mandatory use with a HTML code large,
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  incrementBy = ( value: number ): void => {
    if((this.counter + value) < 0) return;

    this.counter += value;
  }

  resetCounter = (): void => {
    this.counter = 10;
  }

  // decrementBy = ( value: number ): void => {
  //   if(this.counter == 0) return;

  //   this.counter -= value;
  // }
}
