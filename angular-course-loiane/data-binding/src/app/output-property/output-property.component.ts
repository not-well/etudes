import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent {
  constructor() {}

  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  valorCampoInput: ElementRef = {} as ElementRef;

  incrementa(): void {
    ++this.valorCampoInput.nativeElement.value;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    --this.valorCampoInput.nativeElement.value;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
