import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: "Krillin", power: 1000 },
    { id: uuid(), name: "Goku", power: 9500 },
    { id: uuid(), name: "Vegetta", power: 7500 },
    { id: uuid(), name: "Cell", power: 4500 },
  ];

  public lastCharacterDeleted?: Character = { name: "", power: 0 };

  addCharacter(character: Character): void{
    const newCharacter: Character = { ...character, id: uuid() }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void{

    this.lastCharacterDeleted = this.characters.find( character => character.id === id);
    this.characters = this.characters.filter( character => character.id !== id );

  }
}
