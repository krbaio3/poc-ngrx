import { Action } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const AGREGAR_TODO = '[TODO] Agregar ToDo';
export const TOGGLE_TODO = '[TODO] Toggle ToDo';
export const TOGGLE_ALL_TODO = '[TODO] ToggleAll ToDo';
export const EDITAR_TODO = '[TODO] Editar ToDo';
export const BORRAR_TODO = '[TODO] Borrar ToDo';
export const BORRAR_COMPLETADOS = '[TODO] Borrar Completados';

export class AgregaTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {}
}

export class BorrarCompletadosAction implements Action {
  readonly type = BORRAR_COMPLETADOS;
}

export type Acciones =
  | AgregaTodoAction
  | EditarTodoAction
  | BorrarTodoAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | BorrarCompletadosAction;
