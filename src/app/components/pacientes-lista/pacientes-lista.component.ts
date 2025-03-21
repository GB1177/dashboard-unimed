import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Paciente } from '../../core/models/pacientes/pacientes.model';
import { PacientesService } from '../../core/services/pacientes-service/pacientes.service';

@Component({
  selector: 'app-pacientes-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pacientes-lista.component.html',
  styleUrl: './pacientes-lista.component.scss',
})
export class PacientesListaComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    // Chamada real comentada para testes com mock
    // this.pacientesService.getPacientes().subscribe((data) => {
    //   this.pacientes = data;
    // });

    // Mock de pacientes para teste
    this.pacientes = [
      {
        codigo: '001',
        hospital: 'Hospital Central',
        carteiraConvenio: '123456',
        nomePaciente: 'João Silva',
        dataInternacao: new Date('2024-03-10'),
        altaInternacao: null,
        especialidade: 'Cardiologia',
        cid: 'I10',
        dataAvaliacaoInicial: new Date('2024-03-12'),
        responsavelAvaliacaoInicial: 'Dr. Carlos',
        inconformidades: 'Nenhuma',
        visitas: 'Diárias',
        leitos: '101A',
      },
      {
        codigo: '002',
        hospital: 'Hospital Regional',
        carteiraConvenio: '654321',
        nomePaciente: 'Maria Oliveira',
        dataInternacao: new Date('2024-02-20'),
        altaInternacao: new Date('2024-03-05'),
        especialidade: 'Neurologia',
        cid: 'G40',
        dataAvaliacaoInicial: new Date('2024-02-22'),
        responsavelAvaliacaoInicial: 'Dra. Fernanda',
        inconformidades: 'Histórico de epilepsia',
        visitas: 'Semanal',
        leitos: '202B',
      },
    ];
  }
}
