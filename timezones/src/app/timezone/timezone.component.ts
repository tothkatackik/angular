import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timezone',
  imports: [],
  templateUrl: './timezone.component.html',
  styleUrl: './timezone.component.scss',
})
export class TimezoneComponent {
  @Input() isCurrent:boolean = false;
  @Input() currentTimezone:string = "";
  @Output() isChanged = new EventEmitter<boolean>();
  date:string = "";

  refresh():void {
    this.date = new Date().toLocaleString("en-US", {timeZone: this.currentTimezone});
  }

  chooseCurrent() {
    this.isCurrent = !this.isCurrent;
    this.isChanged.emit(this.isCurrent);
  }

}
