import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tetel',
  imports: [],
  templateUrl: './tetel.component.html',
  styleUrl: './tetel.component.scss',
})
export class TetelComponent {
  @Input() nev:string="tétel";
  @Input() cel:number=5;
  db=0;

  @Output() kesz=new EventEmitter<string>()

  novel() {
    if (this.db<this.cel) {
      this.db++;
    } 
    if (this.db==this.cel){
      this.kesz.emit(`${this.nev} termekből ${this.db} db megvásárolva!`)
    }

  }
}
