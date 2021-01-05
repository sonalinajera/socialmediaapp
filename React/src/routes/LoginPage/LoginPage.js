import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

const LoginPage = (props) => {


    return (
        <div>
            <div className="login-header-form">
                <h2 className="login-page-h2">Welcome! Please Login</h2>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage
