import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public lastCharacterDeleted: Character = { name: "", power: 0 };

  @Input()
  public characterList: Character[] = [];

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id?: string): void{
    if(!id) return;

    this.deleteCharacterById.emit(id)
  }
}
