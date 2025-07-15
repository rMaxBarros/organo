import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
