import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.css';


const RegistrationPage = () => {
    return (
        <div className="registration-page-wrapper">
            <h2 className="registration-form-h2">Register a New Account</h2>
            <RegistrationForm />
        </div>
    )
}

export default RegistrationPage
