export interface Paciente {
  codigo: string;
  hospital: string;
  carteiraConvenio: string;
  nomePaciente: string;
  dataInternacao: Date | null;
  altaInternacao: Date | null;
  especialidade: string;
  cid: string;
  dataAvaliacaoInicial: Date | null;
  responsavelAvaliacaoInicial: string;
  inconformidades: string;
  visitas: string;
  leitos: string;
}
