import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import background from './images/paper_bg.png';
import reportWebVitals from './reportWebVitals';


// import { JjDeDaGg } from './other/JjDeDaGg.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <img id="background" src={background} /> */}
    <App />

    {/* <JjDeDaGg /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
