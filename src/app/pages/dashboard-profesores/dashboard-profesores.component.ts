import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-profesores',
  standalone: true,
  imports: [NavComponent,RouterModule],
  templateUrl: './dashboard-profesores.component.html',
  styleUrl: './dashboard-profesores.component.css'
})
export class DashboardProfesoresComponent {
  constructor(private router: Router) {} // Inyectar Router en el constructor

  logout() {
    localStorage.setItem("login", "false");  // Guardar estado de logout
    this.router.navigate(['']);  // Redirigir correctamente
  }

}
