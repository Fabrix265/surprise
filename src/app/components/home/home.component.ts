import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userInput: string = ''; // Almacena el texto ingresado por el usuario
  errorMessage: string = ''; // Muestra mensajes de error
  showSection: boolean = false; // Controla si se muestra la sección adicional

  constructor(private router: Router) {}

  validateInput() {
    if (this.userInput.trim().toLowerCase() === 'fireflies') {
      this.errorMessage = ''; // Limpia el mensaje de error
      this.showSection = true; // Muestra la sección adicional
      setTimeout(() => {
        // Redirige al componente de preguntas
        this.router.navigate(['/question']);
      }, 1000); // Espera un segundo antes de redirigir
    } else {
      this.errorMessage = 'Texto incorrecto. Por favor, intenta nuevamente.';
      this.showSection = false; // Oculta la sección adicional
    }
  }
}
