import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class Livro {
  
  livro = {
    titulo: "Uma vida Pequena",
    autoria: "Hanya Yanagihara",
    imagem: "https://m.media-amazon.com/images/I/810ru7lFZcS._UF894,1000_QL80_.jpg"
  }
}
