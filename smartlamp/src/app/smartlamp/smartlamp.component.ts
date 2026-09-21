import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smartlamp',
  imports: [FormsModule],
  templateUrl: './smartlamp.component.html',
  styleUrl: './smartlamp.component.scss',
})
export class SmartlampComponent {
  @Input() name:string = "";
  @Input() brightness:number = 0;
  @Input() turnedOn = false;
  @Output() currentlyTurnedOn = new EventEmitter<{"name":string, "turnedOn":boolean}>();

  switch() {
    this.turnedOn = !this.turnedOn;
    let info = {"name": this.name, "turnedOn": this.turnedOn};
    this.currentlyTurnedOn.emit(info);
  }
}