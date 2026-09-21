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

  isChanged(p:{"currentTimezone":string, "isCurrent":boolean}) {
    for (const e of this.timezones) {
      if (e.currentTimezone == p.currentTimezone) e.isCurrent=true;
      else e.isCurrent = false;
    }
  }

  timezones = [
    {
      "currentTimezone": "America/New_York",
      "isCurrent": true
    },
    {
      "currentTimezone": "Europe/Budapest",
      "isCurrent": false
    }
  ]
}
