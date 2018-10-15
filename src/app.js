import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import { firebase } from  './firebase';
import handleAuthStateChanged from './utils/handleAuthStateChanged';

const store = configureStore();

ReactDOM.render(<LoadingPage /> , document.getElementById('app'));

firebase.auth().onAuthStateChanged( handleAuthStateChanged(store) );
