import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Post from './Post'

it('Post renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Post />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
