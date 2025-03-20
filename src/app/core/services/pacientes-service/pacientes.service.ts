import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../../models/pacientes/pacientes.model';
import { environment } from '../../../environments/pacientes-environments/pacientes-environments';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar pacientes:', error);
        return throwError(() => new Error('Erro ao carregar pacientes'));
      })
    );
  }
}
