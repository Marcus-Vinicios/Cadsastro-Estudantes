import { Component, OnInit } from '@angular/core';
import { Professores } from '../professores';
import { PROFESSOR } from '../mock-professores';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

export class ProfessoresComponent implements OnInit {
  
  professor = PROFESSOR;
  selectedProfessores?: Professores;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(professor: Professores): void {
    this.selectedProfessores = professor;
  }

}