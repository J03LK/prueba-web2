import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-estudiante',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './dashboard-estudiante.component.html',
  styleUrl: './dashboard-estudiante.component.css'
})
export class DashboardEstudianteComponent {

  constructor(private router: Router) {} // Inyectar Router en el constructor

  logout() {
    localStorage.setItem("login", "false");  // Guardar estado de logout
    this.router.navigate(['']);  // Redirigir correctamente
  }
}
