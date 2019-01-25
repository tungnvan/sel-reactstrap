import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/app';
importAll(require.context('./scss', true, /\.scss$/));

function importAll (r) {
    r.keys().forEach(r);
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));