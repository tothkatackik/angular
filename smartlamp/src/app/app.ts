import { Component, signal } from '@angular/core';
import { SmartlampComponent } from './smartlamp/smartlamp.component';

@Component({
  selector: 'app-root',
  imports: [SmartlampComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('smartlamp');
  
  rooms = [
    {
      "name": "Nappali",
      "brightness": 0,
      "turnedOn": false
    },
    {
      "name": "Hálószoba",
      "brightness": 0,
      "turnedOn": false
    },
    {
      "name": "Konyha",
      "brightness": 0,
      "turnedOn": false
    },
    {
      "name": "Fürdőszoba",
      "brightness": 0,
      "turnedOn": false
    }
  ]

  turnedOnCount = this.rooms.filter(e => e.turnedOn).length;

  currentlyTurnedOn(p:{"name":string, "turnedOn":boolean}):void {
    for (const e of this.rooms) {
      if (p.name == e.name) e.turnedOn = p.turnedOn;
    }
    this.turnedOnCount = this.rooms.filter(e => e.turnedOn).length;
  }
}
