import { Component, OnInit } from '@angular/core';
import { BlocoCardsComponent } from '../../components/bloco-cards/bloco-cards.component';
import { PacientesListaComponent } from '../../components/pacientes-lista/pacientes-lista.component';
import { DashboardService } from '../../core/services/dashboard-hospitais-service/dashboard-hospitais.service';
import { DashboardData, Hospital } from '../../core/models/dashboard-hospitais/dashboard-hospitais.model';

@Component({
  selector: 'app-dashboard-hospitais',
  standalone: true,
  imports: [BlocoCardsComponent, PacientesListaComponent],
  templateUrl: './dashboard-hospitais.component.html',
  styleUrl: './dashboard-hospitais.component.scss',
})
export class DashboardHospitaisComponent implements OnInit {
  dashboardData!: DashboardData;
  hospitais: Hospital[] = [];
  hospitalSelecionado!: Hospital;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService
      .getDashboardData()
      .subscribe((data: DashboardData) => {
        this.dashboardData = data;
        this.hospitais = data.hospitais;
        this.hospitalSelecionado = this.hospitais[0]; 
      });
  }

  selecionarHospital(hospital: Hospital): void {
    this.hospitalSelecionado = hospital;
  }
}
