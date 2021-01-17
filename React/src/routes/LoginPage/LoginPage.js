import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'


const LoginPage = (props) => {


    return (
        <section className="login-page-wrapper">
            <div className="login-header-form">
                <h2 className="login-page-h2">Welcome! Please Login</h2>
                <LoginForm setLoggedIn={props.setLoggedIn} loggedIn={props.loggedIn} />
            </div>
        </section>
    )
}

export default LoginPage
