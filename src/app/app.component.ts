import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardHospitaisComponent } from "./pages/dashboard-hospitais/dashboard-hospitais.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardHospitaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard-unimed';
}
