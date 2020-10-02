import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-broma-componente',
  templateUrl: './broma-componente.component.html',
  styleUrls: ['./broma-componente.component.css']
})
export class BromaComponente {
  @Input() joke : Joke 
  @Output() jokeRemove = new EventEmitter<Joke>();

  knowJoke(){
    this.jokeRemove.emit(this.joke);
  }
  
}

/*
let joke = new BromaComponente()
console.log(joke.setup);
console.log(joke.punchline);

setup:string;
  punchline:string;
  
  constructor(){
    this.setup = "Hola estoy";
    this.punchline = "probando";
  }

*/