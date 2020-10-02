import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list-component/joke-list-component.component';
import { JokeBuilderComponent } from './components/joke-builder/joke-builder.component';


//APP - Component
@Component({
  selector: `app`,
  template: `<joke-list></joke-list>`
})
export class AppComponent {
}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JokeComponent, JokeListComponent, JokeBuilderComponent],
  bootstrap: [AppComponent]
})export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
