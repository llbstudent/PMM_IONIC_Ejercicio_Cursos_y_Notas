import { Joke } from './../../Joke';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-joke-builder',
  templateUrl: './joke-builder.component.html',
  styleUrls: ['./joke-builder.component.css']
})
export class JokeBuilderComponent{
  //var
  @Output() myOwnJoke = new EventEmitter<Joke>();

  constructor() { }

  makeAJoke(setup: string, punchline: string){
    this.myOwnJoke.emit(new Joke(setup, punchline));
  }


}
