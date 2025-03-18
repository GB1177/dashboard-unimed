import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes-lista.component.html',
  styleUrl: './pacientes-lista.component.scss',
})
export class PacientesListaComponent {
  pacientes = [
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
}
