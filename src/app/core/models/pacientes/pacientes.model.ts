export interface Paciente {
  carteirinha: string;
  nome: string;
  idade: number;
  sexo: 'M' | 'F';
  cid: string;
  procedimento: string;
  status: 'Ativo' | 'Pendente' | 'Internado' | 'Aguardando';
}
