import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, NavComponent, FormularioComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
