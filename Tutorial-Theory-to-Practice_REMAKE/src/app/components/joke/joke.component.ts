import { Joke } from './../../Joke';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke : Joke;
  @Output() jokeRemove = new EventEmitter<Joke>();
  blackBck = false;
  bigFont = false;

  constructor() { }

  //Borrar broma
  deleteJoke() {
    this.jokeRemove.emit(this.joke);
  }

  //Cambio de fondo y letra
  changeBck(){
    this.blackBck = !this.blackBck;
  }

  changeFont(){
    this.bigFont = !this.bigFont;
  }

  //Mi directiva personalizada
  assignClasses(){
    let classes = {
      bckChange : this.blackBck,
      size : this.bigFont
    };
    return classes;
  }
}
