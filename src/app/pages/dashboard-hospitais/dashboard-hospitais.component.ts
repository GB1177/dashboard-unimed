import { Component } from '@angular/core';
import { BlocoCardsComponent } from '../../components/bloco-cards/bloco-cards.component';
import { PacientesListaComponent } from '../../components/pacientes-lista/pacientes-lista.component';

@Component({
  selector: 'app-dashboard-hospitais',
  standalone: true,
  imports: [BlocoCardsComponent, PacientesListaComponent],
  templateUrl: './dashboard-hospitais.component.html',
  styleUrl: './dashboard-hospitais.component.scss',
})
export class DashboardHospitaisComponent {
  blocoEsquerdo = {
    cards: [
      { label: 'Internados', value: 120 },
      { label: 'UI', value: 45 },
      { label: 'UTI', value: 30 },
      { label: 'Emergência', value: 80 },
    ],
  };

  blocoDireito = {
    cards: [
      { label: 'Hoje', value: 10 },
      { label: 'Ativos', value: 200 },
      { label: 'Elegíveis', value: 60 },
      { label: 'Guias Pendentes', value: 25 },
    ],
  };
}
