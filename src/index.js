import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Q1 from './currency/Q1';
// import App from "./App";
// import ShoppingCart from './homeproject/ShoppingCart';
// import Counter from './mypractice/Counter';
// import CurrencyCalculator from './currency/CurrencyCalculator';
import TodosList from "./homeproject/TodosList";
import App from './imageShowingWebsite/App';


const myweb = ReactDOM.createRoot(document.getElementById('MyDream'));
myweb.render(
  <React.StrictMode>
   {/* <CheckingOddOrEven /> */}
   {/* <App/> */}
   {/* <ShoppingCart/> */}
   {/* <Counter /> */}
   {/* <CurrencyCalculator title = "currency calculator"/> */}
   {/* <Q1 /> */}
   <App />
   {/* <TodosList /> */}
  </React.StrictMode>
);
reportWebVitals();
