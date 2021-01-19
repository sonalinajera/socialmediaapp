import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Email from './Email'

it('Email renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Email />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
