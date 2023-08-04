import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {last} from "rxjs";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power : 10
  }];

  onDeleteCharacter(index:string):void{
    //TODO:Emitir el ID del personaje
    this.onDelete.emit(index);
    console.log(index )
  }

}
