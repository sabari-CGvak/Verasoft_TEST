import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import storeConfig from "./Store/Store";

import EvoTestDesign from './Pages/Orders';

const store = storeConfig();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EvoTestDesign />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
