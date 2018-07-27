import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContadorState } from '../../states/contador.state';
import { ResetAction } from '../../actions/contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  public contador: number;

  constructor(public store: Store<ContadorState>) {}

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe(state => {
      console.log(state);
      this.contador = state;
    });
  }

  public reset(): void {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
