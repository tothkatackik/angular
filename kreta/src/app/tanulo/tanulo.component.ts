import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tanulo',
  imports: [],
  templateUrl: './tanulo.component.html',
  styleUrl: './tanulo.component.scss',
})
export class TanuloComponent {
  @Input() name:string="";
  @Input() grades=[];
  @Input() isAbsent:boolean=false;
}
