import * as fromToDo from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Ir de Vacaciones');
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

    case fromToDo.TOGGLE_ALL_TODO:
      return state.map(todoAll => {
          return { ...todoAll, completado: action.completado };
      });

    case fromToDo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          // El spread operator funciona muy parecido al Object.assign.
          /**
              Otra forma de hacer esto es:
              return Object.assign({}, state, {completado : !todoEdit.completado});
            **/
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case fromToDo.BORRAR_TODO:
      return state.filter(todoRemove => todoRemove.id !== action.id);
    case fromToDo.BORRAR_COMPLETADOS:
      return state.filter(todoRemove => !todoRemove.completado);
    default:
      return state;
  }
}
