import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './todo.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll(): void {
    this.completado = !this.completado;
    console.log(this.completado);

    this.store.dispatch(new ToggleAllTodoAction(this.completado));
  }
}
