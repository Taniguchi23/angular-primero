import {Component} from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Iron Man';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName():void{
    this.name = 'Spiderman';
  }

  changeHeroAge():void{
    this.age = 25;
  }
}
