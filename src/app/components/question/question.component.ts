import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  questions: { question: string, answer: string }[] = [
    { question: 'Recuerdas la vez que te regalé una rosa? Se que dicen las flores amarillas, pero yo te di otra de un color especial, recuerdas el color de la rosa?', answer: 'blanca' },
    { question: 'Nuestro aniversario es el 19 de enero, un lindo dia y muy especial, ademas yo sigo recordando el dia que te pregunté, lo recuerdas? (fecha solo número del dia)', answer: '17' },
    { question: 'Recuerdo una cancion que te gustaba, ademas de el lindo mensaje, you are.... you are...., que FALTABA para completarla?', answer: 'my universe' },
    { question: 'Recuerdas cuando fui a tu casa y nos pusimos las firmas en nuestros brazos? fue lindo ahi tambien te di una pequeña ave de que material?', answer: 'papel' },
    { question: 'Una de nuestras salidas que nunca olvidaréfue cuando hicimos nuestro intercambio de regalitos, tengo mi tacita por eso, recuerdas donde lo hicimos?, una pista es que tambien fue una de nuestras primeras salidas', answer: 'playa' },
    { question: 'Recuerdo un link que me mandaste una vez, una pagina muy linda y curiosa, quizas no te mostré cuanto me gustaba en su momento, pero no me olvidé de ella, recuerdas el nombre COMPLETO de la pagina? our....', answer: 'our special book' },
    { question: 'Tarea tarea tarea y actualizacion reciente, hay un juego que me gusta mucho, seguro lo recuerdas cuando te digo "me invadió un espectro oscuro", ese juego tiene muchos personajes, de los cuales uno me gusta mucho. Coloca el nombre del personaje que me refiero exactamente como lo encuentres(no olvidar minuscula y en español). Pistas para que encuentres al personaje: Alabado sea el sol - Astora - Guerrero de la luz solar', answer: 'solaire de astora' },
    { question: 'Fin de las preguntas, mi idea con esto era que hagas un poquito de memoria en algunas cositas puntuadas, ya que siempre te digo que te centres en las cositas buenas, felices, me gusta ser parte de tu felicidad, ser el que la causa, la persona con la que la compartes. Aun falta un poco de recorrido en este.... juego? pero es algo que quice hacerte. Pero de yas te voy diciendo, Pieri te amo, mucho mucho, te amo, y el escribir o decirte "te amo" no llega a verdaderamente expresar cuanto siento por ti. Ahora para continuar en esta travesia, te amo, podrias decirme tambien "te amo"?' , answer: 'te amo' }
  ];
  
  currentQuestionIndex: number = 0;
  userAnswer: string = '';
  message: string = '';
  showNextButton: boolean = false;

  checkAnswer() {
    if (this.userAnswer.trim().toLowerCase() === this.questions[this.currentQuestionIndex].answer) {
      this.message = 'Wiiiiii!';
      this.showNextButton = true;
    } else {
      this.message = 'Respuesta incorrecta. Intenta nuevamente. Recuerda todo minuscula y sin tildes ni nada';
      this.showNextButton = false;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.userAnswer = '';
      this.message = '';
      this.showNextButton = false;
    } else {
      this.message = '¡Felicidades, respondiste todito todito, ahora sigue en este link:    https://drive.google.com/drive/folders/1u9mxKFqqOY2qI1e0lK5ebD7nHm0FZlnP?usp=sharing';
    }
  }
}