import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App"
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
document.addEventListener("DOMContentLoaded", (e) => {
  console.log({ DCL: e.timeStamp });
});

ReactDOM.render(app,
  document.getElementById('root')
);


