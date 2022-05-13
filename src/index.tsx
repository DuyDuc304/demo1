import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Login from './components/login';
import Loginfail from './components/loginfail';
import reportWebVitals from './reportWebVitals';
import RessetPW from './components/ressetpw';
import RessetPWStep2 from './components/ressetpwstep2';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './styles/App.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginfail" element={<Loginfail />} />
        <Route path="/ressetpwstep2" element={<RessetPWStep2 />} />
        <Route path="/ressetpw" element={<RessetPW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
