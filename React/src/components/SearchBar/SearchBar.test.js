import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchBar from './SearchBar'

it('SearchBar renders successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <SearchBar />
        </Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
