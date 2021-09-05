import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Translation } from './utils/languageSwith';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const t = new Translation();
t.init();
t.initPassTranslationEventListener();