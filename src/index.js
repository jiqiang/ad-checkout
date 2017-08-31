import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import { fetchData } from './actions'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(fetchData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
