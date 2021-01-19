import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfilePage from './ProfilePage'

it('ProfilePage renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <ProfilePage postData={[]} userData={[]} userId={2} />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
