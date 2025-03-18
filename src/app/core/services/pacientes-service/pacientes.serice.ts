import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paciente } from '../../models/pacientes/pacientes.model';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private pacientes: Paciente[] = [
    {
      carteirinha: '123456',
      nome: 'João Silva',
      idade: 45,
      sexo: 'M',
      cid: 'J18',
      procedimento: 'Consulta',
      status: 'Ativo',
    },
    {
      carteirinha: '654321',
      nome: 'Maria Souza',
      idade: 38,
      sexo: 'F',
      cid: 'E11',
      procedimento: 'Exame',
      status: 'Pendente',
    },
    {
      carteirinha: '789012',
      nome: 'Carlos Mendes',
      idade: 50,
      sexo: 'M',
      cid: 'I10',
      procedimento: 'Internação',
      status: 'Internado',
    },
    {
      carteirinha: '345678',
      nome: 'Ana Lima',
      idade: 29,
      sexo: 'F',
      cid: 'K21',
      procedimento: 'Cirurgia',
      status: 'Aguardando',
    },
  ];

  getPacientes(): Observable<Paciente[]> {
    return of(this.pacientes); // Simulando API com Observable
  }
}
