import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'

it('Navbar renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Navbar />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
