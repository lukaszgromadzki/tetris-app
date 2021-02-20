import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player = {};
  gameStarted = GameComponent;

  gameStart($event) {
    this.player = {
      name: $event.name,
      email: $event.email,
    };
    this.gameStarted;
  }

  gameExit() {

  }
}