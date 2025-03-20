import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { PacientesService } from './app/core/services/pacientes-service/pacientes.service';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), PacientesService],
}).catch((err) => console.error(err));
