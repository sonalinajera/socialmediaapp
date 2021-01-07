import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import './NotFoundPage.css'

const NotFoundPage = () => {

    //Using some basic animations for when the component renders
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className="not-found-wrapper" style={props}>
            <h2>404 - Page not found</h2>
            <Link to='/'><Button variant="warning">Back To Login</Button>{' '}</Link>
        </animated.div>
    )
}

export default NotFoundPage
