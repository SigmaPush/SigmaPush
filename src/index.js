import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets.js';

import Search from './components/Search';
import Article from './components/Article';
import Author from './components/Author';
import Reader from './components/Reader';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/search/" component={Search} />
          <Route path="/Article/:id" component={Article} />
          <Route path="/Author/:id" component={Author} />
          <Route path="/Reader/:id" component={Reader} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
