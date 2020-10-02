import { JokeComponent } from './../joke/joke.component';
import { Component, OnInit } from '@angular/core';
import { Joke } from './../../Joke';

@Component({
  selector: `joke-list`,
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponent implements OnInit{
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke(`Which machine turns coffee into code?`, `A Programmer`),
      new Joke(`The part of a computer that you can kick is...`, `The Hardware`),
      new Joke(`‘0’ is false and ‘1’ is true, right?`, `1`),
      new Joke(`A word use by programmers when... They do not want to explain what they did...`, `Algorithm`),
      new Joke(`How do you call a programmer from Findland?`, `‘Nerdic’`),
    ];
  }

  addJoke(joke) {
    this.jokes.push(joke);
  }

  removeJoke(joke) {
    let i = this.jokes.indexOf(joke);
    this.jokes.splice(i, 1);
  }

  ngOnInit() {}
}
