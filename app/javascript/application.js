// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (<h1>Hello World!</h1>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
