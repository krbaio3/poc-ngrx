import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: [],
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  chkField: FormControl;
  txtInput: FormControl;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  editando: boolean;

  constructor( private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.todo);

    this.chkField.valueChanges.subscribe(
      () => {
        const accion = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(accion);
      }
    )

  }

  editar() {
    this.editando = true;
    // this.txtInputFisico.nativeElement.focus();

    //va tan rápido que a veces no funciona bien
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
