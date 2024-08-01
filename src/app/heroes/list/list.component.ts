import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = this.getHeroes();
  public deletedHeroe?: string;

  deleteLastHeroe(): void{
    this.deletedHeroe = this.heroes.pop();
  }

  restartHeroes(): void{
    this.heroes = this.getHeroes();
  }

  getHeroes(): string[]{
    return ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Black Widow', 'Falcon', 'Thor'];
  }
}
