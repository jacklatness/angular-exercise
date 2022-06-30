import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise';
  screen = 'exercise1'

  constructor(private route:Router) { }

  switchScreen(screen: string): void {
    this.screen = screen;
  }
}
