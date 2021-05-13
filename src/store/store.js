import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from './syns';

const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
