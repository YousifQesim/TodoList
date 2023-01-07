import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>Todo List</h1>
    <App />
  </React.StrictMode>
);


