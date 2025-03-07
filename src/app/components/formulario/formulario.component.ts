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

  email: string = '';  // Se mantiene el estado del email
  password: string = '';  

  constructor(private servicio: LoginService, private route: Router) { }

  login(formulario: any) {
    // Asignar el valor del email desde el formulario
    this.email = formulario.value.email;
    console.log('Correo recibido:', this.email); // Verifica si el correo es correcto
  
    this.servicio.postLogin(formulario.value).subscribe(acceso => {
      let token = acceso.accessToken;
      console.log('Token recibido:', token); // Verifica si el token es recibido correctamente
  
      if (token !== '') {
        localStorage.setItem("login", "true");
  
        // Usar trim() para asegurarnos de que no haya espacios adicionales en el correo
        if (this.email.trim().includes('@profesores.com.ec')) {
          console.log('Redirigiendo a la página de profesores'); // Verifica que la lógica sea correcta
          this.route.navigate(['profesor']);
        } else {
          console.log('Redirigiendo a la página de estudiantes'); // Verifica que la lógica sea correcta
          this.route.navigate(['estudiante']);
        }
      } else {
        console.error('Token vacío recibido');
      }
    }, error => {
      console.error('Error al hacer login:', error);
    });
  }  