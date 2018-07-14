import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { ContadorState } from './states/contador.state';
import {
  IncrementarAction,
  DecrementarAction
} from './actions/contador.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contador: number;

  constructor(private store: Store<ContadorState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state);
    });
  }

  public incremento(): void {
    // this.contador++;
    const accion = new IncrementarAction();

    this.store.dispatch(accion);
  }

  public decremento(): void {
    // this.contador--;
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
