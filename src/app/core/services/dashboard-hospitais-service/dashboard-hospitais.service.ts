import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardData } from '../../models/dashboard-hospitais/dashboard-hospitais.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private mockData: DashboardData = {
    hospitais: [
      { id: 1, nome: 'Hospital 1' },
      { id: 2, nome: 'Hospital 2' },
      { id: 3, nome: 'Hospital 3' },
    ],
    blocoEsquerdo: {
      cards: [
        { label: 'Internados', value: 120 },
        { label: 'UI', value: 45 },
        { label: 'UTI', value: 30 },
        { label: 'Emergência', value: 80 },
      ],
    },
    blocoDireito: {
      cards: [
        { label: 'Hoje', value: 10 },
        { label: 'Ativos', value: 200 },
        { label: 'Elegíveis', value: 60 },
        { label: 'Guias Pendentes', value: 25 },
      ],
    },
  };

  getDashboardData(): Observable<DashboardData> {
    return of(this.mockData);
  }
}
