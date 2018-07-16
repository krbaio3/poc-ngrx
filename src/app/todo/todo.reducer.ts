import * as fromToDo from './todo.actions';
import { Todo } from './models/todo.model';

const estadoInicial : Todo[] = [];

export function todoReducer(state = estadoInicial, action: fromToDo.Acciones): Todo[] {

  switch (action.type) {
    case fromToDo.AGREGAR_TODO:
    const todo = new Todo (action.texto);
      return [...state, todo];
    default:
      return state;
  }
}
