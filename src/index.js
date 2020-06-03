import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
