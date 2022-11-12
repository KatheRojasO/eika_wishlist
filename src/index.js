import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const DATA = [
  { id: "item-1", name: "Eat", completed: false },
  { id: "item-2", name: "Sleep", completed: false },
  { id: "item-3", name: "Repeat", completed: false }
];*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


