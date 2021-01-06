import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

it('NotFoundPage renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <NotFoundPage />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
