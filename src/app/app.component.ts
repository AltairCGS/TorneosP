import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TorneosComponent } from './torneos/torneos.component';
import { ConveniosComponent } from './convenios/convenios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TorneosComponent, ConveniosComponent],
})
export class AppComponent {
  title = 'TorneosP';

  close() {
    const menu = document.querySelector('#menu');

    menu?.classList.add('translate-x-full');
  }

  open() {
    const menu = document.querySelector('#menu');

    menu?.classList.remove('translate-x-full');
  }
}
