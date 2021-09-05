import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from "./contexts/ThemeContext";
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

