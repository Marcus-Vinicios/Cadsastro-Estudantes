import { Component, OnInit } from '@angular/core';
import { Aluno } from '../alunos';
import { ALUNOS } from '../mock-estudantes';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})

export class EstudantesComponent implements OnInit {
  
  alunos = ALUNOS;
  selectedAluno?: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }

}