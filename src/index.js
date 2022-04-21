import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from 'react-redux';
import store from "./redux/store"


// import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')  
  );

reportWebVitals();
