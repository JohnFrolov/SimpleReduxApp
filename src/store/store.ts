import {createStore, applyMiddleware, Store} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {AppStore} from '../AppModels';
import {filmReducer} from '../FilmsModule/reducers/FilmReducer';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore);

export const store: Store<AppStore> = createStoreWithMiddleware(filmReducer);
