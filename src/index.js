import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

// import {AuthProvider} from './Context/AuthProvider'
ReactDOM.render(
  <>
 
    <BrowserRouter>
      <App />
    </BrowserRouter>  
   
  </>,
  document.getElementById('root')
);