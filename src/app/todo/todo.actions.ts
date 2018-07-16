import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar ToDo';

export class AgregaTodoAction implements Action {

  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export type Acciones = AgregaTodoAction;
