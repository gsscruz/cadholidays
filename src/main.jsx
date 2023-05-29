import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import 'the-new-css-reset/css/reset.css';
import './globalStyles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
