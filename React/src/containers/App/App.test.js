
import App from './App';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


it('App renders successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>, div)
  ReactDOM.unmountComponentAtNode(div)
})
