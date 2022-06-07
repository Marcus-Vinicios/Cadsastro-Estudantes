import { Injectable } from '@angular/core';
import { Professores } from './professores';
import { PROFESSOR } from './mock-professores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfessoresService {
  getAlunos(): Observable<Professores[]> {
    const professores = of(PROFESSOR);
    return professores;
  }
  constructor() { }
}