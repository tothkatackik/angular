import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() itemName:string = "";
  @Input() itemCount:number = 0;
  @Input() neededCount:number = 1;

  @Output() addClick = new EventEmitter<number>();

  oneMore() {
    this.addClick.emit(this.itemCount++);
    if (this.itemCount == this.neededCount) alert(`${this.itemName} kész!`);
  }
}
