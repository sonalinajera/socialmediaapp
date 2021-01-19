import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import BioCard from './BioCard'

it('BioCard renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <BioCard userId={1} userData={[]} />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
