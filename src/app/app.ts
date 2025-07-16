import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { ListaLivros } from './components/lista-livros/lista-livros';
import { GeneroLiterario } from "./components/genero-literario/genero-literario";

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    ListaLivros,
    GeneroLiterario
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
