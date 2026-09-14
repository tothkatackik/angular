import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-alma',
  imports: [FormsModule],
  templateUrl: './alma.component.html',
  styleUrl: './alma.component.scss',
})
export class AlmaComponent {
  @Input() subtitle="alma";
  @Output() titleClick = new EventEmitter();

  title="Pite";
  alternateText="Ez egy zsalmás pite";

  modify():void {
    this.alternateText="Megettem a zsalmás pitét................"
  }

  onClickTitle() {
    this.titleClick.emit(this.alternateText);
  }
}
