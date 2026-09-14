import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alma',
  imports: [FormsModule],
  templateUrl: './alma.component.html',
  styleUrl: './alma.component.scss',
})
export class AlmaComponent {
  @Input() subtitle="alma";
  @Output() titleClick = new EventEmitter<string>();

  title="Pite";
  alternateText="Ez egy zsalmás pite";

  modify():void {
    this.alternateText="Megettem a zsalmás pitét................"
  }

  onClickTitle() {
    this.titleClick.emit(this.alternateText);
  }
}
