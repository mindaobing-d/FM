/**
 * Created by apple on 2019/9/7.
 */

/*import {createStore , applyMiddleware} from 'redux'

import bookReducer from './reducer.js'

import thunk from 'redux-thunk';

//创建store 并且 导出 store
var store = createStore( bookReducer,applyMiddleware(thunk) );

export default  store;*/

import {createStore} from 'redux'

import bookReducer from './reducer.js'

//创建store 并且 导出 store
var store = createStore( bookReducer );

export default  store;


