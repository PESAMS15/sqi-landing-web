import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Nav';
import Main1 from './Main1';
import Main2 from './Main2';
import reportWebVitals from './reportWebVitals';
import Main3 from './Main3';
import Main4 from './Main4';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav /> 
    <Main1 /> 
    <Main2 />
    <Main3  />
    <Main4  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
