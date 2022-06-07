import { Component, OnInit } from '@angular/core';
import { Aluno } from '../alunos';
import { AlunoService } from '../aluno.service';
import { Professores } from '../professores';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  alunos: Aluno[] = [];
  professores: Professores[] = [];

  constructor(private AlunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAlunos();
    this.getProfessores();
  }

  getAlunos(): void {
    this.AlunoService.getAlunos()
      .subscribe(Aluno => this.alunos = Aluno.slice(1, 5));
  }

  getProfessores(): void {
    this.ProfessoresService.getProfessores()
      .subscribe(professores => this.professores = professores.slice(1, 5));
  }
}