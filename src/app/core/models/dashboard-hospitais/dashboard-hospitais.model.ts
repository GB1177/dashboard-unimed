export interface Hospital {
  id: number;
  nome: string;
}

export interface DashboardCard {
  label: string;
  value: number;
}

export interface DashboardData {
  hospitais: Hospital[];
  blocoEsquerdo: { cards: DashboardCard[] };
  blocoDireito: { cards: DashboardCard[] };
}
