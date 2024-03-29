import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from "./contexts/ThemeContext";
import {BrowserRouter} from "react-router-dom";
import { hydrate, render } from "react-dom";

//testing if the changes are there

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "new-portfolio-34646.firebaseapp.com",
  projectId: "new-portfolio-34646",
  storageBucket: "new-portfolio-34646.appspot.com",
  messagingSenderId: "253233773669",
  appId: "1:253233773669:web:db7e24c23f5d6809e11a8c",
  measurementId: "G-7WHQ8GGMKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement =  document.getElementById('root');


if(rootElement.hasChildNodes()){
  hydrate(  
  <BrowserRouter>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
       </ThemeContextProvider>
    </React.StrictMode>
  </BrowserRouter>, rootElement)
}else{
  render(  
    <BrowserRouter>
      <React.StrictMode>
        <ThemeContextProvider>
          <App />
         </ThemeContextProvider>
      </React.StrictMode>
    </BrowserRouter>, rootElement)
}


// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//     <ThemeContextProvider>
//         <App />
//     </ThemeContextProvider>
//   </React.StrictMode>
//   </BrowserRouter>,
//   rootElement
// );

