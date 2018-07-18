import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
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
      console.log(this.filtroActual);
    });
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
    console.log(nuevoFiltro);
    this.store.dispatch(new fromFilter.SetFiltroAction(nuevoFiltro));
  }
}
