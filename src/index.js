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
import Main5 from './Main5';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav /> 
    <Main1 /> 
    <Main2 />
    <Main3  />
    <Main4  />
    <Main5  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
