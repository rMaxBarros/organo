import { Livro } from "./livro";

export interface LivroInterface {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: generoLiterario;
}

export interface generoLiterario {
    id: string;
    value: string;
    livros: Livro[];
}