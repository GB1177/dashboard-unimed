import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../core/models/pacientes/pacientes.model';
import { PacientesService } from '../../core/services/pacientes-service/pacientes.serice';

@Component({
  selector: 'app-pacientes-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacientes-lista.component.html',
  styleUrl: './pacientes-lista.component.scss',
})
export class PacientesListaComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }
}
