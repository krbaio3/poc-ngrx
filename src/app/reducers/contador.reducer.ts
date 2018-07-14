// import { Action } from '@ngrx/store';
import {
  Actions,
  DECREMENTAR,
  INCREMENTAR,
  MULTIPLICAR,
  DIVIDIR,
  RESET
} from '../actions/contador.action';

export function contadorReducer(state: number = 8, action: Actions) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
}
