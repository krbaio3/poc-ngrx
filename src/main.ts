import { incrementarAction, decrementarAction, multiplicarAction, dividirAction, resetAction } from './actions';
import { contadorReducer } from './reducer/reducer';
import { Store } from './store/store';


const store = new Store( contadorReducer, 70);

console.log(store.getState());

// Acciones
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
console.log(store.getState());
store.dispatch( decrementarAction );
console.log(store.getState());
store.dispatch( multiplicarAction );
console.log(store.getState());
store.dispatch( dividirAction );
console.log(store.getState());
store.dispatch( resetAction );
console.log(store.getState());
