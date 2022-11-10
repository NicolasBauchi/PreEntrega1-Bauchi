import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADmeLuR10N7uoW_N5qcVjQ-AStn6rUJGE",
  authDomain: "ecommercereact-98454.firebaseapp.com",
  projectId: "ecommercereact-98454",
  storageBucket: "ecommercereact-98454.appspot.com",
  messagingSenderId: "1021474296968",
  appId: "1:1021474296968:web:bb49fec30c970a10327b3d"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
