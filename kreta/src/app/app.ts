import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TanuloComponent } from './tanulo/tanulo.component';
import { OsztalyComponent } from './osztaly/osztaly.component';

@Component({
  selector: 'app-root',
  imports: [TanuloComponent, OsztalyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kreta');

  
}
