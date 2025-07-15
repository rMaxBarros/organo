import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { Livro } from './components/livro/livro';

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    Livro
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
