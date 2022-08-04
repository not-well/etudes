import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  private cursos: string[] = ['Angular', 'Java', 'Spring'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
  }
}
