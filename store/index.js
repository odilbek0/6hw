import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Исправленный импорт
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
