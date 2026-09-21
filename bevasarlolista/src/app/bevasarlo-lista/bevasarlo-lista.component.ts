import { Component } from '@angular/core';
import { TetelComponent } from './tetel/tetel.component';

@Component({
  selector: 'app-bevasarlo-lista',
  imports: [TetelComponent],
  templateUrl: './bevasarlo-lista.component.html',
  styleUrl: './bevasarlo-lista.component.scss',
})
export class BevasarloListaComponent {

  

  kesz(uzenet:string):void {
    console.log("alma");
    alert(uzenet);
  }
}
