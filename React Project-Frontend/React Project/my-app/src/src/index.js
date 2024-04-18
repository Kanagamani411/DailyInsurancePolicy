import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root')
);


/*
import { render } from "react-dom";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/