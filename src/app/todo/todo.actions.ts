import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar ToDo';
export const TOGGLE_TODO = '[TODO] Toggle ToDo';

export class AgregaTodoAction implements Action {

  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {

  readonly type = TOGGLE_TODO;

  constructor(public id: number) { }
}


export type Acciones = AgregaTodoAction | ToggleTodoAction;
