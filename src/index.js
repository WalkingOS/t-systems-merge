import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader';
import './index.css';
import App from './App';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import './index.css';
import reportWebVitals from './reportWebVitals';



// applyPolyfills().then(() => {
//   defineCustomElements(window);
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
