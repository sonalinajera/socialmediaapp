import React from 'react'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import ResetPassword from '../../components/ResetPassword/ResetPassword'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/user/registration' component={RegistrationPage} />
                <Route exact path='/user/reset-password' component={ResetPassword} />
            </Switch>
        </div>
    )
}

export default App;


