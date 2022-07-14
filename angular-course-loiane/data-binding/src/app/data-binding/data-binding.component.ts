import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'https://loiane.training/';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMousOver: boolean = false;
  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMousOver = !this.isMousOver;
  }

  onMudouValor(evento: { novoValor: number }): void {
    console.log(evento.novoValor);
  }

  constructor() {}
}
