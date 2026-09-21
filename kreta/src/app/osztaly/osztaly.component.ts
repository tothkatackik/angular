import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-osztaly',
  imports: [],
  templateUrl: './osztaly.component.html',
  styleUrl: './osztaly.component.scss',
})
export class OsztalyComponent {
  @Input() class:string="";
  @Input() classmaster:string="";
  @Input() students=[];
}
