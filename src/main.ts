import { Store, createStore } from 'redux';
import { contadorReducer } from './reducer/reducer';
import { incrementarAction } from './actions';

const store: Store = createStore( contadorReducer );

store.subscribe( () => {
    console.log(`Subs: ${store.getState()}`);
})

store.dispatch( incrementarAction);
store.dispatch( incrementarAction);

store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);
store.dispatch( incrementarAction);

