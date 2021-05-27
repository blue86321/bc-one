import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'  // use async actions
import {composeWithDevTools} from 'redux-devtools-extension'  // use DevTools
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
