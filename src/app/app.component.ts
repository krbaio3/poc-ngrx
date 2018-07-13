import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contador: number;

  constructor() {
    this.contador = 10;
  }

  public incremento(): void {
    this.contador++;
  }

  public decremento(): void {
    this.contador--;
  }
}
