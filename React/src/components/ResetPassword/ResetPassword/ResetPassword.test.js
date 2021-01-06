import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ResetPassword from './ResetPassword'

it('ResetPassword renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <ResetPassword />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
