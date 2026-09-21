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

  @Output() kesz=new EventEmitter<{"nev": string, "db": number}>()

  novel() {
    if (this.db<this.cel) {
      this.db++;
      let info = {"nev":this.nev, "db": this.db}
      
    } 
  }
}
