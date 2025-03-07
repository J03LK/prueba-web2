import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Agrega CommonModule aquí
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  autenticacion(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('login') === 'true';
    }
    return false;
  }
}

