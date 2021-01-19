import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfilePic from './ProfilePic'

it('ProfilePic renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <ProfilePic profilePic={'www.google.com'} />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
