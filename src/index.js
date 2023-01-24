import './fonts/Ondo.ttf';
import './fonts/Arial.ttf';
import './fonts/Circular.ttf';
import './fonts/Circular-book.ttf';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        @font-face {
          font-family: 'Arial';
          src: local('Arial'), url() ('./fonts/Arial.ttf') format('truetype');
          font-family: 'Inter', sans-serif;
        }
        body {
          margin: 0;
        }
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          // text-decoration: none;
          // ondo 700,circular book 400, circular 400 500 700 900,arial 400
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
