import { Component, OnInit } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-lista-bromas',
  templateUrl: './lista-bromas.component.html',
  styleUrls: ['./lista-bromas.component.css']
})
export class ListaBromasComponent implements OnInit {

  jokes : Joke[];
  constructor() { 
    this.jokes = 
      [
        new Joke("broma1","result1"),
        new Joke("broma2","result2"),
        new Joke("broma3","result3"),
      ]
    
  }

  addJoke(joke){
    this.jokes.unshift(joke);
  }

  removeJoke(joke){
    let i = this.jokes.indexOf(joke);
    this.jokes.splice(i,1);
  }

  ngOnInit() {
  }

}

/*

jokes : Object[];
  constructor() { 
    this.jokes = [
      {
        setup:"Hola",
        punchline:"Adios",
        hide: true
      },
      {
        setup:"Hola",
        punchline:"Adios",
        hide: true

      },
      {
        setup:"Hola",
        punchline:"Adios",
        hide: true

    }
    ]
  }
  toggle(joke){
    joke.hide = !joke.hide;
  }

*/
