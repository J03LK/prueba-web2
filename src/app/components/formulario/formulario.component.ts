import { Component } from '@angular/core'; // Importar OnInit
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service'; // Importar LoginService

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  email: string = '';
  password: string = '';  

  constructor(private servicio: LoginService, private route: Router) { }

  login(formulario: any) {
    // Asignar el valor del email desde el formulario
    this.email = formulario.value.email;

    this.servicio.postLogin(formulario.value).subscribe(acceso => {
      let token = acceso.accessToken;
      if (token != '') {
        localStorage.setItem("login", "true");

        // Verificar si el correo contiene @profesores.com.ec
        if (this.email.includes('@profesores.com.ec')) {
          this.route.navigate(['profesores']);
        } else {
          this.route.navigate(['estudiante']);
        }
      }
    });
  }
}
