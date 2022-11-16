import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'Spring'];
  emitirCursoCriado: EventEmitter<string> = new EventEmitter<string>();
  static criouNovoCurso: EventEmitter<string> = new EventEmitter<string>();

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos(): string[] {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
