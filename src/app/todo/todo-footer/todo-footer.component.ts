import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import { BorrarCompletadosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;
  todos: number;

  filtrosValidos: fromFilter.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes'
  ];
  filtroActual: fromFilter.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
      this.todos = state.todos.length;
      console.log(state.todos.length);
      console.log(this.filtroActual);
    });
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
    console.log(nuevoFiltro);
    this.store.dispatch(new fromFilter.SetFiltroAction(nuevoFiltro));
  }

  contarPendientes(todos: Todo[]) {
    // todo.completados = false;
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  removeCompleted() {
    this.store.dispatch(new BorrarCompletadosAction())
  }
}
