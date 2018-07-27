import { Action } from '@ngrx/store';

// CONSTANTES
export const SET_FILTRO = '[Filter] Set Filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// CLASES
export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filtro: filtrosValidos) {}
}

export type acciones = SetFiltroAction;
