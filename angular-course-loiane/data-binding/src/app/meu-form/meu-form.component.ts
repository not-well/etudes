import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent {
  constructor() {}

  nome: string = 'abc';
  pessoa = {
    nome: 'def',
    idade: 20,
  };
}
