import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import AppReducer from './Reducers/appReducer'
import { projectfilesAddAudio, projectfilesPlayAudio } from './Actions/projectFiles'
import App from './Components/App/component'

let store = createStore(AppReducer)
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(projectfilesAddAudio('Qami Pchi'))
store.dispatch(projectfilesAddAudio('Twenty One Pilots - Heathens [Audio Remix]'))
store.dispatch(projectfilesAddAudio('Delta Heavy - Kill Room'))

// Stop listening to state updates
unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
