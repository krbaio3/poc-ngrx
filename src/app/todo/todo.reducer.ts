import * as fromToDo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Salvar España');
const todo2 = new Todo('Hola Mundo');
todo2.completado = true;

const estadoInicial : Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromToDo.Acciones): Todo[] {

  switch (action.type) {
    case fromToDo.AGREGAR_TODO:
    const todo = new Todo (action.texto);
      return [...state, todo];
    default:
      return state;
  }
}
