import * as fromToDo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Salvar España');
const todo2 = new Todo('Hola Mundo');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(
  state = estadoInicial,
  action: fromToDo.Acciones
): Todo[] {
  switch (action.type) {
    case fromToDo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromToDo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          // El spread operator funciona muy parecido al Object.assign.
          /**
              Otra forma de hacer esto es:
              return Object.assign({}, state, {completado : !todoEdit.completado});
            **/
          return { ...todoEdit, completado: !todoEdit.completado };
        } else {
          return todoEdit;
        }
      });

    default:
      return state;
  }
}
