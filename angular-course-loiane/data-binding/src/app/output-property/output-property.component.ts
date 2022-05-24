import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  constructor() {}

  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  valorCampoInput: ElementRef = {} as ElementRef;

  ngOnInit(): void {}

  incrementa(): void {
    ++this.valorCampoInput.nativeElement.value;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    --this.valorCampoInput.nativeElement.value;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
