import { Component, signal } from '@angular/core';
import { TimezoneComponent } from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  imports: [TimezoneComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('timezones');
  isCurrent = false;

  isChanged(isCurrent:boolean) {
    this.isCurrent = !isCurrent;
  }
}
