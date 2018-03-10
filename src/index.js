import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Search from './components/search.js';
import Article from './components/article.js';
import Author from './components/author.js';
import Reader from './components/reader.js';
import Home from './components/home.js';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <div>
          <Switch>
            <Route path="/search/" component={Search} />
            <Route path="/Article/:id" component={Article} />
            <Route path="/Author/:id" component={Author} />
            <Route path="/Reader/:id" component={Reader} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter >
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();