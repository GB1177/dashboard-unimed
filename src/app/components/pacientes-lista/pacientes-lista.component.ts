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
    this.pacientesService.getPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }
}
