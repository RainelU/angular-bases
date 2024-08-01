import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;
  public isHeroeChanged = false;

  capitalize(text: string):string {
    let capitalized = text.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');

    return capitalized;
  }

  getHeroeDescription():string {
    return `Nombre: ${this.name} - Edad: ${this.age}`
  }

  changeHero = ():void => {
    this.name = "Spiderman"
    this.isHeroeChanged = true;
  };

  changeAge = ():void => {
    this.age = Math.round(Math.random() * 100);
  };

  resetForm = ():void => {
    this.age = 45;
    this.name = 'ironman';
    this.isHeroeChanged = false;
  };
}
