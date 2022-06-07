import { Injectable } from '@angular/core';
import { Aluno } from './alunos';
import { ALUNOS } from './mock-estudantes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  getAlunos(): Observable<Aluno[]> {
    const aluno = of(ALUNOS);
    return aluno;
  }
  constructor() { }
}
