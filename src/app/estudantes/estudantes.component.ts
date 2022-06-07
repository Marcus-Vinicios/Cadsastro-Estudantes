import { Component, OnInit } from '@angular/core';
import { Aluno } from '../alunos';
import { ALUNOS } from '../mock-estudantes';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css'],
})

export class EstudantesComponent implements OnInit {
  
  aluno: Aluno[] = [];
  alunos = ALUNOS;
  selectedAluno?: Aluno;

  constructor(private AlunoService: AlunoService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.AlunoService.getAlunos()
        .subscribe(alunos => this.aluno = alunos);
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }

}