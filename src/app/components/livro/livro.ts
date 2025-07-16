import { Component } from '@angular/core';
import { LivroInterface } from './livroInterface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class Livro {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
  
  livro: LivroInterface = {
    titulo: "Uma vida Pequena",
    autoria: "Hanya Yanagihara",
    favorito: false,
    genero: "Drama",
    imagem: "https://m.media-amazon.com/images/I/810ru7lFZcS._UF894,1000_QL80_.jpg"
  }
}
