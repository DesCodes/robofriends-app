import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

// import CardList from './CardList.js';
// import {robots} from './robots.js';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
