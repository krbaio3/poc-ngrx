import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContadorState } from '../../states/contador.state';
import { MultiplicarAction, DividirAction } from '../../actions/contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<ContadorState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state);
    });
  }

  public multiplicar(): void {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
    // this.contador *= 2;
    // this.cambiarContador.emit(this.contador);
  }

  public dividir(): void {
    const action = new DividirAction(2);
    this.store.dispatch(action);
    // this.contador /= 2;
    // this.cambiarContador.emit(this.contador);
  }

  public resetNieto(evento): void {
    this.contador = evento;
    // this.cambiarContador.emit(this.contador);
  }
}
