import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { AgregaTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  addToDo() {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(new AgregaTodoAction(this.txtInput.value));
    this.txtInput.setValue('');
  }
}
