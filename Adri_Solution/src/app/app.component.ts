import { Component } from '@angular/core';
import { BromaComponente } from './broma/broma-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bromas1';

  //broma = new BromaComponente();
  // HTML <h1>{{broma.setup}}</h1>

}
