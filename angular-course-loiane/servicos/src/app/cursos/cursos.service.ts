import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'Spring'];
  emitirCursoCriado: EventEmitter<string> = new EventEmitter<string>();
  static criouNovoCurso: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
