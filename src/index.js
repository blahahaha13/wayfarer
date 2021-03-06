import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import LoadingComponent from './components/LoadingComponent';
// import AuthenticatedComponent from './components/AuthenticatedComponent';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';
import './index.css';

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// provide the store to react

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <LoadingComponent><div>
  <Switch>
  <Route path="/:id/edit" component={NoteEdit} exact={true} />
  <Route path="/:id" component={NoteDetail} exact={true} />
  <Route path="/" component={App} exact={true} />
  </Switch>
  </div>
  </LoadingComponent>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();