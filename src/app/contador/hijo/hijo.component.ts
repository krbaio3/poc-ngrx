import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {
  @Input() contador: number;
  @Output() cambiarContador = new EventEmitter<number>();

  constructor() {}

  public multiplicar(): void {
    this.contador *= 2;
    this.cambiarContador.emit(this.contador);
  }

  public dividir(): void {
    this.contador /= 2;
    this.cambiarContador.emit(this.contador);
  }

  public resetNieto(evento): void {
    this.contador = evento;
    this.cambiarContador.emit(this.contador);
  }
}
