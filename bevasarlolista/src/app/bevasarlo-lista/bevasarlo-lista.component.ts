import { Component } from '@angular/core';
import { TetelComponent } from './tetel/tetel.component';

@Component({
  selector: 'app-bevasarlo-lista',
  imports: [TetelComponent],
  templateUrl: './bevasarlo-lista.component.html',
  styleUrl: './bevasarlo-lista.component.scss',
})
export class BevasarloListaComponent {

  tetelek = [
    {
      "nev": "alma",
      "db": 0,
      "cel": 2
    },
    {
      "nev": "plainka",
      "db": 0,
      "cel": 10
    },
    ]

  kesz(p:{"nev":string, "db":number}):void {
    for(const e of this.tetelek) {
      if (e.nev == p.nev) {
        e.db=p.db;
      }
    }
  }
}
