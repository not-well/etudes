import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://loiane.training/';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMousOver: boolean = false;

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

  constructor() {}

  ngOnInit(): void {}
}
