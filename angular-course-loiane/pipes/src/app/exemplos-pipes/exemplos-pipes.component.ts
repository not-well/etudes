import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  public livro: any = {
    titulo: 'Livro teste',
    rating: 3.12345,
    numeroPaginas: 300,
    preco: 1.99,
    dataLancamento: new Date(2000, 6, 15),
    url: 'http://www.google.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
